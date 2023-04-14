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
    experience: {},
    qualification: {},
    experienceList: [],
    qualificationList: [],
  });

  handleChange = (field, innerField, val) => {
    this.setState({
      [field]: {
        ...this.state[field],
        [innerField]: val,
      },
    });
  };

  handleSubmit = (listName, fieldName) => {
    this.setState((oldState) => ({
      ...oldState,
      [listName]: [...oldState[listName], oldState[fieldName]],
      [fieldName]: {},
    }));
  };

  render() {
    return (
      <main className="main-container">
        <AppHeader />

        <div className="cv-container">
          <Tabs
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            personal={this.state.personal}
            experience={this.state.experience}
            qualification={this.state.qualification}
            experienceList={this.state.experienceList}
            qualificationList={this.state.qualificationList}
          />
          <CVPreview {...this.state} />
        </div>
      </main>
    );
  }
}

export default App;
