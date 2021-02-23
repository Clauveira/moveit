import styles from '../styles/components/CompletedChellenges.module.css';

export function CompletedChellenges() {
    return(
        <div className={styles.completedChellengesContainer}>
            <span>Desafios completos</span>
            <span>7</span>
        </div>
    );
}