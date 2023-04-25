import { Icon } from '@iconify/react';

const icons = {
  personal: 'ph:user-thin',
  qualifications: 'ph:scroll-thin',
  experience: 'ph:briefcase-simple-thin',
  settings: 'ph:gear-thin',
};

function TabItem({ id, tab, active, onTabClick }) {
  const switchTab = (e) => {
    const id = parseInt(e.target.dataset.id, 10);
    onTabClick(id);
  };

  return (
    <li className="">
      <button
        className={active ? 'btn tab-btn active' : 'btn tab-btn'}
        aria-label={`${tab} tab`}
        data-id={id}
        onClick={switchTab}
      >
        <Icon icon={icons[tab]} />
      </button>
    </li>
  );
}

export default TabItem;
