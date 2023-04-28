import PersonalPreview from './Previews/PersonalPreview';
import ExperiencePreview from './Previews/ExperiencePreview';
import QualificationPreview from './Previews/QualificationPreview';

function CVPreview() {
  return (
    <div className="cv-preview">
      <PersonalPreview />
      <ExperiencePreview />
      <QualificationPreview />
    </div>
  );
}

export default CVPreview;
