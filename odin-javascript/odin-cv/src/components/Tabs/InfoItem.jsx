import React from 'react';
import { Icon } from '@iconify/react';

class InfoItem extends React.Component {
  editItem = (e) => {
    this.props.editItem(e.target.dataset.id);
  };

  deleteItem = (e) => {
    this.props.deleteItem(e.target.dataset.id);
  };

  render() {
    const { title, id } = this.props;

    return (
      <li className="info-item">
        <span className="item-header">{title}</span>

        <div className="item-actions">
          <button
            className="btn action-btn"
            title="Edit"
            data-id={id}
            onClick={this.editItem}
          >
            <Icon icon="ph:pencil-simple-thin" aria-hidden="true" />
          </button>

          <button
            className="btn action-btn"
            title="Delete"
            data-id={id}
            onClick={this.deleteItem}
          >
            <Icon icon="ph:trash-simple-light" aria-hidden="true" />
          </button>
        </div>
      </li>
    );
  }
}

export default InfoItem;
