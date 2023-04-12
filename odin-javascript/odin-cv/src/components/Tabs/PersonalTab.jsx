import React from 'react';

class PersonalTab extends React.Component {
  handleChange = (e) => {
    this.props.handleChange('personal', e.target.name, e.target.value);
  };

  render() {
    const {
      personal: { firstName, lastName, title, summary, email, phone },
    } = this.props;

    return (
      <form className="tab-form">
        <h3 className="form-title">Personal</h3>

        <ul className="form-fields">
          <li className="">
            <label htmlFor="first-name" className="">
              <input
                type="text"
                name="firstName"
                id="first-name"
                placeholder=" "
                value={firstName}
                onChange={this.handleChange}
              />
              <span>First Name</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="last-name" className="">
              <input
                type="text"
                name="lastName"
                id="last-name"
                placeholder=" "
                value={lastName}
                onChange={this.handleChange}
              />
              <span>Last Name</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="title" className="">
              <input
                type="text"
                name="title"
                id="title"
                placeholder=" "
                value={title}
                onChange={this.handleChange}
              />
              <span>Title</span>
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
            <label htmlFor="email" className="">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={this.handleChange}
              />
              <span>Email</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="phone" className="">
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder=" "
                value={phone}
                onChange={this.handleChange}
              />
              <span>Phone</span>
            </label>
          </li>
        </ul>

        <button className="btn form-btn">Submit</button>
      </form>
    );
  }
}

export default PersonalTab;
