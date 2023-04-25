import PersonalPreview from './Previews/PersonalPreview';
import ExperiencePreview from './Previews/ExperiencePreview';
import QualificationPreview from './Previews/QualificationPreview';

function CVPreview({ personal, experienceList, qualificationList }) {
  return (
    <div className="cv-preview">
      <PersonalPreview {...personal} />
      <ExperiencePreview experienceList={experienceList} />
      <QualificationPreview qualificationList={qualificationList} />
    </div>
  );
}

export default CVPreview;
