import React from 'react';

import PersonalPreview from './Previews/PersonalPreview';
import ExperiencePreview from './Previews/ExperiencePreview';
import QualificationPreview from './Previews/QualificationPreview';

class CVPreview extends React.Component {
  render() {
    const { personal, experienceList, qualificationList } = this.props;

    return (
      <div className="cv-preview">
        <PersonalPreview {...personal} />
        <ExperiencePreview experienceList={experienceList} />
        <QualificationPreview qualificationList={qualificationList} />
      </div>
    );
  }
}

export default CVPreview;
