import {useEffect, useState} from "react";

interface Weather {
    temperature: number;
    description: string;
}

export const useWeather = () => {
    const [weather, setWeather] = useState<Weather | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
                    if (!response.ok) {
                        setError('Failed to fetch weather');
                    }
                    const res = await response.json();
                    const currentWeather = res.current_weather;
                    setWeather({
                        temperature: currentWeather.temperature,
                        description: getWeatherDescription(currentWeather.weathercode)
                    });
                    setLoading(false);
                } catch (e) {
                    setError('Failed to fetch weather');
                    setLoading(false);
                }
            }
        )
    }, []);

    return { weather, error, loading };
};

function getWeatherDescription(code: number): string {
    const map: Record<number, string> = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Drizzle',
        55: 'Heavy drizzle',
        61: 'Light rain',
        63: 'Rain',
        65: 'Heavy rain',
        71: 'Snow fall',
        80: 'Rain showers',
    };
    return map[code] || 'Unknown';
}