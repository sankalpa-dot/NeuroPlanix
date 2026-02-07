import { createContext, useContext, useState } from "react";

const StudyContext = createContext();

export function StudyProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState(0);

  const completeTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: true } : t));
    setProgress(p => Math.min(p + 10, 100));
  };

  return (
    <StudyContext.Provider value={{ tasks, setTasks, progress, completeTask }}>
      {children}
    </StudyContext.Provider>
  );
}

export const useStudy = () => useContext(StudyContext);
