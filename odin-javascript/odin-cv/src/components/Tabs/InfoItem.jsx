import { Icon } from '@iconify/react';

function InfoItem({ title, id, editItem, deleteItem }) {
  return (
    <li className="info-item">
      <span className="item-header">{title}</span>

      <div className="item-actions">
        <button
          className="btn action-btn"
          title="Edit"
          data-id={id}
          onClick={(e) => editItem(e.target.dataset.id)}
        >
          <Icon icon="ph:pencil-simple-thin" aria-hidden="true" />
        </button>

        <button
          className="btn action-btn"
          title="Delete"
          data-id={id}
          onClick={(e) => deleteItem(e.target.dataset.id)}
        >
          <Icon icon="ph:trash-simple-light" aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}

export default InfoItem;
