import React from 'react';

import './styles/styles.css';

import AppHeader from './components/AppHeader';
import Tabs from './components/Tabs';
import CVPreview from './components/CVPreview';

class App extends React.Component {
  render() {
    return (
      <main className="main-container">
        <AppHeader />

        <div className="cv-container">
          <Tabs />
          <CVPreview />
        </div>
      </main>
    );
  }
}

export default App;
