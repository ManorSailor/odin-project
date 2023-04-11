import React from 'react';
import { Icon } from '@iconify/react';

class TabItem extends React.Component {
  icons = {
    personal: 'ph:user-thin',
    qualifications: 'ph:scroll-thin',
    experience: 'ph:briefcase-simple-thin',
    settings: 'ph:gear-thin',
  };

  switchTab = (e) => {
    const id = parseInt(e.target.dataset.id, 10);
    this.props.onTabClick(id);
  };

  render() {
    const { id, tab, active } = this.props;

    return (
      <li className="">
        <button
          className={active ? 'btn tab-btn active' : 'btn tab-btn'}
          aria-label={`${tab} tab`}
          data-id={id}
          onClick={this.switchTab}
        >
          <Icon icon={this.icons[tab]} />
        </button>
      </li>
    );
  }
}

export default TabItem;
