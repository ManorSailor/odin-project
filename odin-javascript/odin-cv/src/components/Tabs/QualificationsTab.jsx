import React from 'react';
import InfoItem from './InfoItem';
import uniqid from 'uniqid';

class QualificationTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState = () => ({
    isEditing: false,
    qualification: {
      id: uniqid(),
      degree: '',
      university: '',
      location: '',
      summary: '',
      startYear: '',
      endYear: '',
    },
  });

  handleChange = (e) => {
    const { qualification } = this.state;

    this.setState({
      qualification: {
        ...qualification,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit('qualificationList', this.state.qualification);
    this.setState(this.initialState());
  };

  editItem = (id) => {
    const { qualificationList: list } = this.props;

    this.setState({
      isEditing: true,
      qualification: structuredClone(list.find((item) => item.id === id)) ?? {},
    });
  };

  updateItem = (e) => {
    e.preventDefault();
    this.props.updateList('qualificationList', this.state.qualification);
    this.setState(this.initialState());
  };

  render() {
    const { qualificationList: list } = this.props;
    const {
      isEditing,
      qualification: {
        degree,
        university,
        location,
        summary,
        startYear,
        endYear,
      },
    } = this.state;

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

          {isEditing ? (
            <button className="btn" onClick={this.updateItem}>
              Update
            </button>
          ) : (
            <button className="btn">Add</button>
          )}
        </form>

        <ul className="info-list">
          {list.map((item) => (
            <InfoItem
              key={item.id}
              title={item.degree}
              id={item.id}
              editItem={this.editItem}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default QualificationTab;
