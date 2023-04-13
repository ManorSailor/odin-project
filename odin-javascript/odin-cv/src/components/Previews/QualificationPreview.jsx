import React from 'react';

class QualificationPreview extends React.Component {
  render() {
    const { qualificationList: list } = this.props;

    return (
      <section className="qualifications-preview">
        <h3 className="preview-header">Qualifications</h3>

        {list.map(({ degree, university, location, startYear, endYear }) => (
          <div className="job-details-preview">
            <h4 className="course-preview">{degree}</h4>

            <div className="duration-preview-container">
              <p className="university-name-preview">
                {university} {location}
              </p>
              |<p className="duration-preview">{startYear}</p>
              <p className="duration-preview">{endYear}</p>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default QualificationPreview;
