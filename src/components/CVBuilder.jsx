import { useState } from 'react';
import { GeneralInfoForm } from './GeneralInfoForm';
import { EducationForm } from './EducationForm';
import { WorkExperienceForm } from './WorkExperienceForm';

function CVBuilder() {
  const [cvData, setCVData] = useState({
    generalInfo: {
      fname: '',
      lname: '',
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

  const addEducation = formData => {
    setCVData(prevState => ({
      ...prevState,
      education: [...prevState.education, formData],
    }));
  };

  const addWorkExperience = formData => {
    setCVData(prevState => ({
      ...prevState,
      workExperience: [...prevState.workExperience, formData],
    }));
  };

  return (
    <>
      <h1>CV Builder</h1>
      <GeneralInfoForm addGeneralInfo={addGeneralInfo} />
      <EducationForm addEducation={addEducation} />
      <WorkExperienceForm addWorkExperience={addWorkExperience} />
    </>
  );
}

export { CVBuilder };
