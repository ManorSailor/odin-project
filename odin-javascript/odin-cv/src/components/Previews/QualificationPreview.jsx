import { useContext } from 'react';
import { QualificationContext } from '../../context/QualificationProvider';

export default function QualificationPreview() {
  const { list } = useContext(QualificationContext);

  return (
    <section className="qualifications-preview">
      <h3 className="preview-header">Qualifications</h3>

      <ul className="qualifications-preview">
        {list.map(
          ({ id, degree, university, location, startYear, endYear }) => (
            <li key={id} className="job-details-preview">
              <h4 className="course-preview">{degree}</h4>

              <div className="duration-preview-container">
                <p className="university-name-preview">
                  {university} {location}
                </p>
                |<p className="duration-preview">{startYear}</p>
                <p className="duration-preview">{endYear}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}
