import {useWeather} from "../../hooks/useWeather.ts";
import styles from './WeatherWidget.module.css';

export default function WeatherWidget() {
  const { weather, loading, error } = useWeather();

  if (loading) return <div className={styles.widget}>Loading weather...</div>;
  if (error) return <div className={styles.widget}>Weather unavailable</div>;
  if (!weather) return null;

  return (
    <div className={styles.widget}>
      <div className={styles.info}>
        <span>{weather.temperature}°C</span>
        <span className={styles.description}>{weather.description}</span>
      </div>
    </div>
  );
};