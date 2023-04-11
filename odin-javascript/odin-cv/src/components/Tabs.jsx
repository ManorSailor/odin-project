import React from 'react';

import TabList from './TabList/TabList';

import PersonalTab from './Tabs/PersonalTab';
import ExperienceTab from './Tabs/ExperienceTab';
import QualificationTab from './Tabs/QualificationsTab';
import SettingsTab from './Tabs/SettingsTab';

class Tabs extends React.Component {
  tabs = ['personal', 'experience', 'qualifications', 'settings'];
  state = {
    activeTab: 0,
  };

  switchTab = (id) => {
    this.setState({
      activeTab: id,
    });
  };

  get activeTab() {
    const { activeTab } = this.state;

    switch (this.tabs[activeTab]) {
      case 'experience':
        return <ExperienceTab />;

      case 'qualifications':
        return <QualificationTab />;

      case 'settings':
        return <SettingsTab />;

      default:
        return <PersonalTab />;
    }
  }

  render() {
    return (
      <section className="tabs-container">
        <TabList
          tabs={this.tabs}
          activeTab={this.state.activeTab}
          onTabClick={this.switchTab}
        />

        {this.activeTab}
      </section>
    );
  }
}

export default Tabs;
