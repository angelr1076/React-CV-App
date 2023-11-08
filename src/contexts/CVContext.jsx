import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const CVContext = createContext();

const CVProvider = ({ children }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [education, setEducation] = useState([
    { id: uuidv4(), schoolName: '', major: '', dateFrom: '', dateTo: '' },
  ]);
  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateFrom: '',
      dateTo: '',
    },
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGeneralInfoChange = updatedInfo => {
    setGeneralInfo(updatedInfo);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { id: uuidv4(), schoolName: '', major: '', dateFrom: '', dateTo: '' },
    ]);
  };

  const handleEducationChange = (updatedEducation, index) => {
    setEducation(prevEducation =>
      prevEducation.map((education, idx) =>
        idx === index ? updatedEducation : education
      )
    );
  };

  const handleDeleteEducation = id => {
    setEducation(education.filter(education => education.id !== id));
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        id: uuidv4(),
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        dateFrom: '',
        dateTo: '',
      },
    ]);
  };

  const handleExperienceChange = (updatedExperience, index) => {
    setExperience(prevEducation =>
      prevEducation.map((experience, idx) =>
        idx === index ? updatedExperience : experience
      )
    );
  };

  const handleDeleteExperience = id => {
    setExperience(experience.filter(experience => experience.id !== id));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  const value = {
    generalInfo,
    setGeneralInfo,
    education,
    setEducation,
    experience,
    setExperience,
    isSubmitted,
    setIsSubmitted,
    handleGeneralInfoChange,
    handleAddEducation,
    handleEducationChange,
    handleDeleteEducation,
    handleAddExperience,
    handleExperienceChange,
    handleDeleteExperience,
    handleSubmit,
    handleEdit,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};

CVProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CVContext, CVProvider };
