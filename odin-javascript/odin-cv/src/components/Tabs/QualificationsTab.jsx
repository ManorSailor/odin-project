import React from 'react';
import InfoItem from './InfoItem';

class QualificationTab extends React.Component {
  handleChange = (e) => {
    this.props.handleChange('qualification', e.target.name, e.target.value);
  };

  handleSubmit = (e) => {
    this.props.handleSubmit('qualificationList', 'qualification');
    e.preventDefault();
  };

  render() {
    const {
      qualificationList: list,
      qualification: {
        degree = '',
        university = '',
        location = '',
        summary = '',
        startYear = '',
        endYear = '',
      },
    } = this.props;

    return (
      <>
        <form className="tab-form" onSubmit={this.handleSubmit}>
          <h3 className="form-title">Qualifications</h3>

          <ul className="form-fields">
            <li className="">
              <label htmlFor="degree" className="">
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  placeholder=" "
                  value={degree}
                  onChange={this.handleChange}
                />
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
                  value={university}
                  onChange={this.handleChange}
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
                  value={location}
                  onChange={this.handleChange}
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
                  value={summary}
                  onChange={this.handleChange}
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
                  value={startYear}
                  onChange={this.handleChange}
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
                  value={endYear}
                  onChange={this.handleChange}
                />
                <span>To (Year)</span>
              </label>
            </li>
          </ul>

          <button className="btn">Submit</button>
        </form>

        <ul className="info-list">
          {list.map((item, index) => (
            <InfoItem key={index} title={item.degree} id={index} />
          ))}
        </ul>
      </>
    );
  }
}

export default QualificationTab;
