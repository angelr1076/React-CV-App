import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CVContext = createContext();

function CVProvider({ children }) {
  const [cvData, setCVData] = useState({
    generalInfo: {
      fullName: '',
      phone: '',
      location: '',
      email: '',
    },
    education: [],
    workExperience: [],
  });

  const addGeneralInfo = formData => {
    setCVData(prevState => ({
      ...prevState,
      generalInfo: formData,
    }));
  };

  const addEducation = (formData, id) => {
    setCVData(prevState => ({
      ...prevState,
      education: [...prevState.education, { ...formData, id }],
    }));
  };

  const addWorkExperience = formData => {
    setCVData(prevState => ({
      ...prevState,
      workExperience: [...prevState.workExperience, formData],
    }));
  };

  return (
    <CVContext.Provider
      value={{ cvData, addGeneralInfo, addEducation, addWorkExperience }}>
      {children}
    </CVContext.Provider>
  );
}

CVProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CVContext, CVProvider };
