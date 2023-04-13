import React from 'react';
import { Icon } from '@iconify/react';

class QualificationTab extends React.Component {
  render() {
    return (
      <>
        <form className="tab-form">
          <h3 className="form-title">Qualifications</h3>

          <ul className="form-fields">
            <li className="">
              <label htmlFor="degree" className="">
                <input type="text" name="degree" id="degree" placeholder=" " />
                <span>Degree/Certification</span>
              </label>
            </li>

            <li className="">
              <label htmlFor="university" className="">
                <input
                  type="text"
                  name="university"
                  id="university"
                  placeholder=" "
                />
                <span>University</span>
              </label>
            </li>

            <li className="">
              <label htmlFor="location" className="">
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder=" "
                />
                <span>Location</span>
              </label>
            </li>

            <li className="">
              <label htmlFor="summary" className="">
                <textarea
                  name="summary"
                  id="summary"
                  placeholder="Summary"
                ></textarea>
              </label>
            </li>

            <li className="">
              <label htmlFor="start-year" className="">
                <input
                  type="text"
                  name="startYear"
                  id="start-year"
                  placeholder=" "
                />
                <span>From (Year)</span>
              </label>
            </li>

            <li className="">
              <label htmlFor="end-year" className="">
                <input
                  type="text"
                  name="endYear"
                  id="end-year"
                  placeholder=" "
                />
                <span>To (Year)</span>
              </label>
            </li>
          </ul>
        </form>

        <ul className="info-list">
          <li className="info-item">
            <span className="item-header">RobCo</span>

            <div className="item-actions">
              <button className="btn action-btn" title="Edit">
                <Icon icon="ph:pencil-simple-thin" aria-hidden="true" />
              </button>
              <button className="btn action-btn" title="Delete">
                <Icon icon="ph:trash-simple-light" aria-hidden="true" />
              </button>
            </div>
          </li>

          <li className="info-item">
            <span className="item-header">RobCo</span>

            <div className="item-actions">
              <button className="btn action-btn" title="Edit">
                <Icon icon="ph:pencil-simple-thin" aria-hidden="true" />
              </button>
              <button className="btn action-btn" title="Delete">
                <Icon icon="ph:trash-simple-light" aria-hidden="true" />
              </button>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default QualificationTab;
