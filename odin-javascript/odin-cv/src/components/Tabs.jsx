import { useState } from 'react';

import TabList from './TabList/TabList';

import PersonalTab from './Tabs/PersonalTab';
import ExperienceTab from './Tabs/ExperienceTab';
import QualificationTab from './Tabs/QualificationsTab';
import SettingsTab from './Tabs/SettingsTab';

const tabs = ['personal', 'experience', 'qualifications', 'settings'];

function Tabs(props) {
  const [activeTabID, setActiveTabID] = useState(0);

  const switchTab = (id) => setActiveTabID(id);

  const getActiveTab = () => {
    switch (tabs[activeTabID]) {
      case 'experience':
        return <ExperienceTab />;

      case 'qualifications':
        return <QualificationTab />;

      case 'settings':
        return <SettingsTab />;

      default:
        return <PersonalTab />;
    }
  };

  return (
    <section className="tabs-container">
      <TabList tabs={tabs} activeTab={activeTabID} onTabClick={switchTab} />
      {getActiveTab()}
    </section>
  );
}

export default Tabs;
