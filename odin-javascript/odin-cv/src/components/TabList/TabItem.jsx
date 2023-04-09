import React from 'react';
import { Icon } from '@iconify/react';

class TabItem extends React.Component {
  icons = {
    personal: 'ph:user-thin',
    qualifications: 'ph:scroll-thin',
    experience: 'ph:briefcase-simple-thin',
    settings: 'ph:gear-thin',
  };

  render() {
    const { tab } = this.props;

    return (
      <li className="">
        <button className="btn tab-btn" aria-label={`${tab} tab`}>
          <Icon icon={this.icons[tab]} />
        </button>
      </li>
    );
  }
}

export default TabItem;
