import React from 'react';

class PersonalPreview extends React.Component {
  render() {
    return (
      <section className="personal-preview">
        <div className="personal-container">
          <div className="name-preview-container">
            <h3 className="name-preview">John Doe</h3>
            <h4 className="title-preview">Software Engineer</h4>
          </div>

          <div className="contact-preview-container">
            <p className="email-preview">Someone@somewhere.com</p>
            <p className="phone-preview">0123456789</p>
          </div>
        </div>

        <p className="summary-preview">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
          laborum explicabo voluptas repudiandae harum excepturi blanditiis nisi
          alias accusamus voluptatem sint labore, perspiciatis dolores? Eos
          laborum rerum adipisci recusandae accusantium.
        </p>
      </section>
    );
  }
}

export default PersonalPreview;
