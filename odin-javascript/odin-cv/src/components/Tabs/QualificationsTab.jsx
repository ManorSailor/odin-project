import { useState } from 'react';
import InfoItem from './InfoItem';
import uniqid from 'uniqid';

const initialState = () => ({
  id: uniqid(),
  degree: '',
  university: '',
  location: '',
  summary: '',
  startYear: '',
  endYear: '',
});

function QualificationTab({
  qualificationList: list,
  updateList,
  filterList,
  handleSubmit: passSubmit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [qualification, setQualification] = useState(initialState());

  const handleChange = (e) => {
    setQualification({
      ...qualification,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    passSubmit('qualificationList', qualification);
    setQualification(initialState());
  };

  const editItem = (id) => {
    const qualification =
      structuredClone(list.find((item) => item.id === id)) ?? {};

    setIsEditing(true);
    setQualification(qualification);
  };

  const updateItem = (e) => {
    e.preventDefault();
    updateList('qualificationList', qualification);
    setQualification(initialState());
  };

  const deleteItem = (id) => {
    setIsEditing(false);
    setQualification({
      ...qualification,
      id: uniqid(),
    });
    filterList('qualificationList', id);
  };

  return (
    <>
      <form className="tab-form" onSubmit={handleSubmit}>
        <h3 className="form-title">Qualifications</h3>

        <ul className="form-fields">
          <li className="">
            <label htmlFor="degree" className="">
              <input
                type="text"
                name="degree"
                id="degree"
                placeholder=" "
                value={qualification.degree}
                onChange={handleChange}
              />
              <span>Degree/Certification</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="university" className="">
              <input
                type="text"
                name="university"
                id="university"
                placeholder=" "
                value={qualification.university}
                onChange={handleChange}
              />
              <span>University</span>
            </label>
          </li>

          <li className="">
            <label htmlFor="location" className="">
              <input
                type="text"
                name="location"
                id="location"
                placeholder=" "
                value={qualification.location}
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
                value={qualification.summary}
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
                value={qualification.startYear}
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
                value={qualification.endYear}
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
            title={item.degree}
            id={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </>
  );
}

export default QualificationTab;
