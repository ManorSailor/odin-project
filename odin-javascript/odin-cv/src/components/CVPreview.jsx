import PersonalPreview from './Previews/PersonalPreview';
import ExperiencePreview from './Previews/ExperiencePreview';
import QualificationPreview from './Previews/QualificationPreview';

function CVPreview({
  personalInfo,
  state: { experienceList, qualificationList },
}) {
  return (
    <div className="cv-preview">
      <PersonalPreview {...personalInfo} />
      <ExperiencePreview experienceList={experienceList} />
      <QualificationPreview qualificationList={qualificationList} />
    </div>
  );
}

export default CVPreview;
