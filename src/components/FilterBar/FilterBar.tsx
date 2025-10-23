import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/tasksSlice.ts';
import styles from './FilterBar.module.css';
import type { RootState } from '../../store/store.ts';

export default function FilterBar() {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state: RootState) => state.tasks.filter);

  const filters: {
    key: 'all' | 'new' | 'done' | 'escalated';
    label: string;
  }[] = [
    { key: 'all', label: 'All' },
    { key: 'new', label: 'New' },
    { key: 'done', label: 'Done' },
    { key: 'escalated', label: 'Escalated' },
  ];

  return (
    <div className={styles.filterGroup}>
      {filters.map((filter) => (
        <button
          className={`${styles.filterButton} ${
            activeFilter === filter.key ? styles.activeFilter : ''
          }`}
          key={filter.key}
          onClick={() => dispatch(setFilter(filter.key))}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
