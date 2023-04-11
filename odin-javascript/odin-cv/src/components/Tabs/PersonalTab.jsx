import React from 'react';

class PersonalTab extends React.Component {
  render() {
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
              />
              <span>Last Name</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="title" className="">
              <input type="text" name="title" id="title" placeholder=" " />
              <span>Title</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="summary" className="">
              <textarea name="summary" id="summary" placeholder="Summary"></textarea>
            </label>
          </li>

          <li className="">
            <label htmlFor="email" className="">
              <input type="email" name="email" id="email" placeholder=" " />
              <span>Email</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="phone" className="">
              <input type="tel" name="phone" id="phone" placeholder=" " />
              <span>Phone</span>
            </label>
          </li>
        </ul>

        <button className='btn form-btn'>Submit</button>
      </form>
    );
  }
}

export default PersonalTab;
