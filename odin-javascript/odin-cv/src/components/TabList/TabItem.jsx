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
    return (
      <li className="">
        <button className="btn tab-btn">
          <Icon icon={this.icons.personal} />
        </button>
      </li>
    );
  }
}

export default TabItem;
