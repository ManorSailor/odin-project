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

  handleSubmit = (listName, item) => {
    this.setState({
      [listName]: [...this.state[listName], item],
    });
  };

  updateList = (listName, updatedItem) => {
    this.setState({
      [listName]: this.state[listName].map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      ),
    });
  };

  filterList = (listName, id) => {
    this.setState({
      [listName]: this.state[listName].filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <main className="main-container">
        <AppHeader />

        <div className="cv-container">
          <Tabs
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            updateList={this.updateList}
            filterList={this.filterList}
            personal={this.state.personal}
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
