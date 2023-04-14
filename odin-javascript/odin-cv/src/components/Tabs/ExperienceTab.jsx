import React from 'react';
import InfoItem from './InfoItem';
import uniqid from 'uniqid';

class ExperienceTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState = () => ({
    isEditing: false,
    experience: {
      id: uniqid(),
      company: '',
      position: '',
      location: '',
      summary: '',
      startYear: '',
      endYear: '',
    },
  });

  handleChange = (e) => {
    const { experience } = this.state;

    this.setState({
      experience: {
        ...experience,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(this.initialState());
    this.props.handleSubmit('experienceList', this.state.experience);
  };

  render() {
    const { experienceList: list } = this.props;
    const {
      isEditing,
      experience: { company, position, location, summary, startYear, endYear },
    } = this.state;

    return (
      <>
        <form className="tab-form" onSubmit={this.handleSubmit}>
          <h3 className="form-title">Experience</h3>

          <ul className="form-fields">
            <li className="">
              <label htmlFor="company" className="">
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder=" "
                  value={company}
                  onChange={this.handleChange}
                />
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
                  value={position}
                  onChange={this.handleChange}
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

          <button className="btn">{isEditing ? 'Update' : 'Add'}</button>
        </form>

        <ul className="info-list">
          {list.map((item) => (
            <InfoItem key={item.id} title={item.company} id={item.id} />
          ))}
        </ul>
      </>
    );
  }
}

export default ExperienceTab;
