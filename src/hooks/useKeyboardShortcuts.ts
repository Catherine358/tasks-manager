import {useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

export const useKeyboardShortcuts = ({ updateStatus }: { updateStatus: (status: 'escalated' | 'done') => void }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = useParams();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
          const target = e.target as HTMLElement;
          if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') return;
          if (e.key === 'h' && e.altKey) {
              e.preventDefault();
              navigate('/');
              return;
          }
          if (e.altKey && location.pathname.includes('/task/') && id) {
              e.preventDefault();
              const taskIndex = tasks.findIndex(t => t.id === Number(id));
              if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                  const nextTask = e.key === 'ArrowRight' ? tasks[taskIndex + 1] : tasks[taskIndex - 1];
                  if (nextTask) {
                      navigate(`/task/${nextTask.id}`);
                  }
                  return;
              }
              if (e.key === 'd' && !e.ctrlKey && !e.metaKey) {
                  updateStatus('done');
                  return;
              }
              if (e.key === 'e' && !e.ctrlKey && !e.metaKey) {
                  updateStatus('escalated');
                  return;
              }
          }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
          window.removeEventListener('keydown', handleKeyDown);
      }
  }, [navigate, location, tasks]);
};