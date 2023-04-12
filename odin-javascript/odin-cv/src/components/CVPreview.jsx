import React from 'react';

import PersonalPreview from './Previews/PersonalPreview';
import ExperiencePreview from './Previews/ExperiencePreview';
import QualificationPreview from './Previews/QualificationPreview';

class CVPreview extends React.Component {
  render() {
    return (
      <div className="cv-preview">
        <PersonalPreview />
        <ExperiencePreview />
        <QualificationPreview />
      </div>
    );
  }
}

export default CVPreview;
