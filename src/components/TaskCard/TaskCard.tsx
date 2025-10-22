import type {Task} from "../../types/task.ts";
import Button from "../Button/Button.tsx";
import styles from './TaskCard.module.css';
import {useState} from "react";

export default function TaskCard({ task }: { task: Task }) {
    const [birthdate, setBirthdate] = useState<string>('');

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
                        id="birthdate"
                        className={styles.input}
                        placeholder="Add missing birthdate information"
                        value={birthdate}
                    />
                </div>
                <Button onClick={() => {}} text="Save" />
            </div>
            <div className={styles.actions}>
                <Button onClick={() => {}} text="Done" className={`${styles.actionButton} ${styles.done}`} />
                <Button onClick={() => {}} text="Escalate" className={`${styles.actionButton} ${styles.escalate}`} />
                <Button onClick={() => {}} text="Skip" className={`${styles.actionButton} ${styles.skip}`} />
            </div>
        </>
    );
}