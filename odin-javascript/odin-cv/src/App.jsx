import { useState } from 'react';

import './styles/styles.css';

import AppHeader from './components/AppHeader';
import Tabs from './components/Tabs';
import CVPreview from './components/CVPreview';

const initialState = () => ({
  personal: {},
  experienceList: [],
  qualificationList: [],
});

function App() {
  const [state, setState] = useState(initialState());

  const handleChange = (field, innerField, val) => {
    setState({
      ...state,
      [field]: {
        ...state[field],
        [innerField]: val,
      },
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
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          updateList={updateList}
          filterList={filterList}
          personal={state.personal}
          experienceList={state.experienceList}
          qualificationList={state.qualificationList}
        />
        <CVPreview {...state} />
      </div>
    </main>
  );
}

export default App;
