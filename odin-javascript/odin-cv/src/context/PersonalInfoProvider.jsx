import { createContext, useState } from 'react';

const PersonalInfoContext = createContext([]);

function PersonalInfoProvider({ children }) {
  const [personalInfo, setPersonalInfo] = useState({});

  const onPersonalInfoChange = (field, val) => {
    setPersonalInfo({
      ...personalInfo,
      [field]: val,
    });
  };

  return (
    <PersonalInfoContext.Provider
      value={{ personalInfo, onPersonalInfoChange }}
    >
      {children}
    </PersonalInfoContext.Provider>
  );
}

export { PersonalInfoContext, PersonalInfoProvider };
