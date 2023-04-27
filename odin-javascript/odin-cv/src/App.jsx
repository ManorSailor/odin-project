import { useState } from 'react';
import { useArray } from './hooks/useArray';

import './styles/styles.css';

import AppHeader from './components/AppHeader';
import Tabs from './components/Tabs';
import CVPreview from './components/CVPreview';

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [experienceList, expListAPI] = useArray();
  const [qualificationList, quaListAPI] = useArray();

  const onPersonalInfoChange = (field, val) => {
    setPersonalInfo({
      ...personalInfo,
      [field]: val,
    });
  };

  const handleSubmit = (listName, item) => {
    listName === 'experienceList' ? expListAPI.add(item) : quaListAPI.add(item);
  };

  const updateList = (listName, updatedItem) => {
    const updaterCb = (item) =>
      item.id === updatedItem.id ? updatedItem : item;

    listName === 'experienceList'
      ? expListAPI.update(updaterCb)
      : quaListAPI.update(updaterCb);
  };

  const filterList = (listName, id) => {
    const filterCb = (item) => item.id !== id;

    listName === 'experienceList'
      ? expListAPI.filter(filterCb)
      : quaListAPI.filter(filterCb);
  };

  return (
    <main className="main-container">
      <AppHeader />

      <div className="cv-container">
        <Tabs
          onPersonalInfoChange={onPersonalInfoChange}
          handleSubmit={handleSubmit}
          updateList={updateList}
          filterList={filterList}
          personalInfo={personalInfo}
          experienceList={experienceList}
          qualificationList={qualificationList}
        />

        <CVPreview {...{ experienceList, qualificationList, personalInfo }} />
      </div>
    </main>
  );
}

export default App;
