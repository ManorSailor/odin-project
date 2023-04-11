import React from 'react';

class ExperienceTab extends React.Component {
  render() {
    return (
      <form className="tab-form">
        <h3 className="form-title">Experience</h3>

        <ul className="form-fields">
          <li className="">
            <label htmlFor="company" className="">
              <input type="text" name="company" id="company" placeholder=" " />
              <span>Company</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="position" className="">
              <input
                type="text"
                name="position"
                id="position"
                placeholder=" "
              />
              <span>Position</span>
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
              <input type="text" name="endYear" id="end-year" placeholder=" " />
              <span>To (Year)</span>
            </label>
          </li>
        </ul>
      </form>
    );
  }
}

export default ExperienceTab;
