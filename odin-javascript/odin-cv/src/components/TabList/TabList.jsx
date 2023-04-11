import React from 'react';
import TabItem from './TabItem';

class TabList extends React.Component {
  render() {
    const { tabs, activeTab, onTabClick } = this.props;

    return (
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <TabItem
            tab={tab}
            key={index}
            id={index}
            onTabClick={onTabClick}
            active={index === activeTab}
          />
        ))}
      </ul>
    );
  }
}

export default TabList;
