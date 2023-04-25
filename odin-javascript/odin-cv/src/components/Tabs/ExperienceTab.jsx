import { useState } from 'react';
import InfoItem from './InfoItem';
import uniqid from 'uniqid';

const initialState = () => ({
  id: uniqid(),
  company: '',
  position: '',
  location: '',
  summary: '',
  startYear: '',
  endYear: '',
});

function ExperienceTab({
  experienceList: list,
  updateList,
  filterList,
  handleSubmit: passSubmit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [experience, setExperience] = useState(initialState());

  const handleChange = (e) => {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    passSubmit('experienceList', experience);
    setExperience(initialState());
  };

  const editItem = (id) => {
    const experience =
      structuredClone(list.find((item) => item.id === id)) ?? {};

    setIsEditing(true);
    setExperience(experience);
  };

  const deleteItem = (id) => {
    setIsEditing(false);
    setExperience({
      ...experience,
      id: uniqid(),
    });
    filterList('experienceList', id);
  };

  const updateItem = (e) => {
    e.preventDefault();
    updateList('experienceList', experience);
    setExperience(initialState());
  };

  return (
    <>
      <form className="tab-form" onSubmit={handleSubmit}>
        <h3 className="form-title">Experience</h3>

        <ul className="form-fields">
          <li className="">
            <label htmlFor="company" className="">
              <input
                type="text"
                name="company"
                id="company"
                placeholder=" "
                value={experience.company}
                onChange={handleChange}
              />
              <span>Company</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="position" className="">
              <input
                type="text"
                name="position"
                id="position"
                placeholder=" "
                value={experience.position}
                onChange={handleChange}
              />
              <span>Position</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="location" className="">
              <input
                type="text"
                name="location"
                id="location"
                placeholder=" "
                value={experience.location}
                onChange={handleChange}
              />
              <span>Location</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="summary" className="">
              <textarea
                name="summary"
                id="summary"
                placeholder="Summary"
                value={experience.summary}
                onChange={handleChange}
              ></textarea>
            </label>
          </li>

          <li className="">
            <label htmlFor="start-year" className="">
              <input
                type="text"
                name="startYear"
                id="start-year"
                placeholder=" "
                value={experience.startYear}
                onChange={handleChange}
              />
              <span>From (Year)</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="end-year" className="">
              <input
                type="text"
                name="endYear"
                id="end-year"
                placeholder=" "
                value={experience.endYear}
                onChange={handleChange}
              />
              <span>To (Year)</span>
            </label>
          </li>
        </ul>

        {isEditing ? (
          <button className="btn" onClick={updateItem}>
            Update
          </button>
        ) : (
          <button className="btn">Add</button>
        )}
      </form>

      <ul className="info-list">
        {list.map((item) => (
          <InfoItem
            key={item.id}
            title={item.company}
            id={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </>
  );
}

export default ExperienceTab;
