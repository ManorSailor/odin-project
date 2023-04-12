import React from 'react';

import PersonalPreview from './Previews/PersonalPreview';
import ExperiencePreview from './Previews/ExperiencePreview';
import QualificationPreview from './Previews/QualificationPreview';

class CVPreview extends React.Component {
  render() {
    const { personal } = this.props;

    return (
      <div className="cv-preview">
        <PersonalPreview {...personal} />
        <ExperiencePreview />
        <QualificationPreview />
      </div>
    );
  }
}

export default CVPreview;
