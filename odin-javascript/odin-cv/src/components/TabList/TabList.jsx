import React from 'react';
import TabItem from './TabItem';

class TabList extends React.Component {
  render() {
    const { tabs } = this.props;

    return (
      <ul className="tab-list">
        {tabs.map((tab, index) => (
          <TabItem tab={tab} key={index} />
        ))}
      </ul>
    );
  }
}

export default TabList;
