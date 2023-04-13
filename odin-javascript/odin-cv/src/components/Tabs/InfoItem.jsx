import React from 'react';
import { Icon } from '@iconify/react';

class InfoItem extends React.Component {
  render() {
    const { title, id } = this.props;

    return (
      <li className="info-item">
        <span className="item-header">{title}</span>

        <div className="item-actions">
          <button className="btn action-btn" title="Edit" data-id={id}>
            <Icon icon="ph:pencil-simple-thin" aria-hidden="true" />
          </button>
          <button className="btn action-btn" title="Delete" data-id={id}>
            <Icon icon="ph:trash-simple-light" aria-hidden="true" />
          </button>
        </div>
      </li>
    );
  }
}

export default InfoItem;
