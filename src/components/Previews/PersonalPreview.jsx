import React from 'react';

class PersonalPreview extends React.Component {
  render() {
    const {
      firstName = '',
      lastName = '',
      title = '',
      summary = '',
      email = '',
      phone = '',
    } = this.props;

    return (
      <section className="personal-preview">
        <div className="personal-container">
          <div className="name-preview-container">
            <h3 className="name-preview">{`${firstName} ${lastName}`}</h3>
            <h4 className="title-preview">{title}</h4>
          </div>

          <div className="contact-preview-container">
            <p className="email-preview">{email}</p>
            <p className="phone-preview">{phone}</p>
          </div>
        </div>

        <p className="summary-preview">{summary}</p>
      </section>
    );
  }
}

export default PersonalPreview;
