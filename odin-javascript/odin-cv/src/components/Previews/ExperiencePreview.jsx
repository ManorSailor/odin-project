import { useContext } from 'react';
import { ExperienceContext } from '../../context/ExperienceProvider';

export default function ExperiencePreview() {
  const { list } = useContext(ExperienceContext);

  return (
    <section className="experience-preview">
      <h3 className="preview-header">Work Experience</h3>

      <ul className="experience-container">
        {list.map(({ id, position, company, startYear, endYear, summary }) => (
          <li key={id} className="">
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
          </li>
        ))}
      </ul>
    </section>
  );
}
