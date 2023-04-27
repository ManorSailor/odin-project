import { createContext } from 'react';
import { useList } from '../hooks/useList';

const QualificationContext = createContext([]);

function QualificationProvider({ children }) {
  const qualificationList = useList();

  return (
    <QualificationContext.Provider value={qualificationList}>
      {children}
    </QualificationContext.Provider>
  );
}

export { QualificationContext, QualificationProvider };
