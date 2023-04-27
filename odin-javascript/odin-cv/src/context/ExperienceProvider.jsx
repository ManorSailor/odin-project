import { createContext } from 'react';
import { useList } from '../hooks/useList';

const ExperienceContext = createContext([]);

function ExperienceProvider({ children }) {
  const experienceList = useList();

  return (
    <ExperienceContext.Provider value={experienceList}>
      {children}
    </ExperienceContext.Provider>
  );
}

export { ExperienceContext, ExperienceProvider };
