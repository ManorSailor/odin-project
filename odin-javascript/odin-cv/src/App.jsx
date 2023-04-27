import { useState } from 'react';

import './styles/styles.css';

import AppHeader from './components/AppHeader';
import Tabs from './components/Tabs';
import CVPreview from './components/CVPreview';

const initialState = () => ({
  experienceList: [],
  qualificationList: [],
});

function App() {
  const [state, setState] = useState(initialState());
  const [personalInfo, setPersonalInfo] = useState({});

  const onPersonalInfoChange = (field, val) => {
    setPersonalInfo({
      ...personalInfo,
      [field]: val,
    });
  };

  const handleSubmit = (listName, item) => {
    setState({
      ...state,
      [listName]: [...state[listName], item],
    });
  };

  const updateList = (listName, updatedItem) => {
    setState({
      ...state,
      [listName]: state[listName].map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
    });
  };

  const filterList = (listName, id) => {
    setState({
      ...state,
      [listName]: state[listName].filter((item) => item.id !== id),
    });
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
          experienceList={state.experienceList}
          qualificationList={state.qualificationList}
        />
        <CVPreview {...{ state, personalInfo }} />
      </div>
    </main>
  );
}

export default App;
