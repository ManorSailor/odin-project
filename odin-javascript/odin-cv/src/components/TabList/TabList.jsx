import TabItem from './TabItem';

function TabList({ tabs, activeTab, onTabClick }) {
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

export default TabList;
