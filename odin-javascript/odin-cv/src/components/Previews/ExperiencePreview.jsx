import React from 'react';

class ExperiencePreview extends React.Component {
  render() {
    return (
      <section className="experience-preview">
        <h3 className="preview-header">Work Experience</h3>

        <div className="experience-container">
          <div className="job-details-preview">
            <h4 className="position-preview">Full Stack Developer</h4>

            <div className="duration-preview-container">
              <p className="company-name-preview">RobCo</p>|
              <p className="duration-preview">2765 - 2077</p>
            </div>
          </div>

          <p className="summary-preview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            veritatis dolore quam magni ullam id amet distinctio neque, error
            in.
          </p>
        </div>
      </section>
    );
  }
}

export default ExperiencePreview;
