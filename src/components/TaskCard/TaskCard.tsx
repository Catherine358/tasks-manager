import type {Task} from "../../types/task.ts";
import Button from "../Button/Button.tsx";
import styles from './TaskCard.module.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store/store.ts";
import {useNavigate} from "react-router-dom";
import {updateTask} from "../../store/tasksSlice.ts";

export default function TaskCard({ task }: { task: Task }) {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    const [birthdate, setBirthdate] = useState<string>('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const goToNextTask = () => {
        const taskIndex = tasks.findIndex(t => t.id === task.id);
        const nextTask = tasks[taskIndex + 1];
        if (nextTask) {
            navigate(`/task/${nextTask.id}`);
        } else {
            navigate('/');
        }
    };

    const updateStatus = (status: 'escalated' | 'done') => {
        dispatch(updateTask({ id: task.id, data: { status } }));
        goToNextTask();
    };

    const saveBirthdate = () => {
        dispatch(updateTask({ id: task.id, data: { birthdate} }));
    };

    return (
        <>
            <div className={styles.card}>
                <div className={styles.infoRow}>
                    <div className={styles.infoColumn}>
                        <span className={`${styles.infoTitle} ${styles.insuredPersonTitle}`}>Insured person</span>
                        <span className={`${styles.info} ${styles.insuredPersonInfo}`}>{task.name}</span>
                    </div>
                    <div className={styles.infoColumn}>
                        <span className={styles.infoTitle}>Insurance number</span>
                        <span className={styles.info}>{task.contractNumber}</span>
                    </div>
                </div>
                <div className={styles.infoRow}>
                    <div className={styles.infoColumn}>
                        <span className={styles.infoTitle}>Gender</span>
                        <span className={styles.info}>{task.sex}</span>
                    </div>
                    <div className={styles.infoColumn}>
                        <span className={styles.infoTitle}>Birthdate</span>
                        <span className={styles.info}>{task.birthdate}</span>
                    </div>
                    <div className={styles.infoColumn}>
                        <span className={styles.infoTitle}>Status</span>
                        <span className={styles.info}>{task.status}</span>
                    </div>
                </div>
                <div className={styles.infoColumn}>
                    <span className={styles.infoTitle}>Address</span>
                    <span className={styles.info}>{task.address}</span>
                </div>
            </div>
            <div className={`${styles.infoRow} ${styles.inputContainer}`}>
                <div className={styles.infoColumn}>
                    <label htmlFor="birthdate" className={styles.label}>Add missing birthdate information (DD.MM.YYYY)</label>
                    <input
                        type="date"
                        id="birthdate"
                        className={styles.input}
                        placeholder="Add missing birthdate information"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </div>
                <Button onClick={saveBirthdate} text="Save" />
            </div>
            <div className={styles.actions}>
                <Button onClick={() => updateStatus('done')} text="Done" className={`${styles.actionButton} ${styles.done}`} />
                <Button onClick={() => updateStatus('escalated')} text="Escalate" className={`${styles.actionButton} ${styles.escalate}`} />
                <Button onClick={goToNextTask} text="Skip" className={`${styles.actionButton} ${styles.skip}`} />
            </div>
        </>
    );
}