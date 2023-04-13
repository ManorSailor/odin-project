import React from 'react';

class ExperiencePreview extends React.Component {
  render() {
    const { experienceList: list } = this.props;

    return (
      <section className="experience-preview">
        <h3 className="preview-header">Work Experience</h3>

        {list.map(({ position, company, startYear, endYear, summary }) => (
          <div className="experience-container">
            <div className="job-details-preview">
              <h4 className="position-preview">{position}</h4>

              <div className="duration-preview-container">
                <p className="company-name-preview">{company}</p>|
                <p className="duration-preview">
                  {startYear} - {endYear}
                </p>
              </div>
            </div>

            <p className="summary-preview">{summary}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default ExperiencePreview;
