import React from 'react';

import './styles/styles.css';

import AppHeader from './components/AppHeader';
import Tabs from './components/Tabs';
import CVPreview from './components/CVPreview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.resetState();
  }

  resetState = () => ({
    personal: {},
    experience: [],
    qualifications: [],
  });

  handleChange = (field, innerField, val) => {
    this.setState({
      [field]: {
        ...this.state[field],
        [innerField]: val,
      },
    });
  };

  render() {
    return (
      <main className="main-container">
        <AppHeader />

        <div className="cv-container">
          <Tabs
            handleChange={this.handleChange}
            personal={this.state.personal}
          />
          <CVPreview {...this.state} />
        </div>
      </main>
    );
  }
}

export default App;
