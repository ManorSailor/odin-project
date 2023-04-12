import React from 'react';

class QualificationPreview extends React.Component {
  render() {
    return (
      <section className="qualifications-preview">
        <h3 className="preview-header">Qualifications</h3>

        <div className="job-details-preview">
          <h4 className="course-preview">CS50: Introduction to Computer Science</h4>

          <div className="duration-preview-container">
            <p className="university-name-preview">Harvard University</p>|
            <p className="duration-preview">2020</p>
          </div>
        </div>
      </section>
    );
  }
}

export default QualificationPreview;
