// src/components/CVForm.js
import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';
import { Box, Heading } from '@chakra-ui/react';

function CVForm() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [education, setEducation] = useState([
    { schoolName: '', major: '', dateOfStudy: '' },
  ]);
  const [experience, setExperience] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGeneralInfoChange = updatedInfo => {
    setGeneralInfo(updatedInfo);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      { schoolName: '', major: '', dateOfStudy: '' },
    ]);
  };

  const handleEducationChange = (updatedEducation, index) => {
    setEducation(prevEducation =>
      prevEducation.map((education, idx) =>
        idx === index ? updatedEducation : education
      )
    );
  };

  const handleExperienceChange = updatedExperience => {
    setExperience(updatedExperience);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <Box className='form-group'>
      <GeneralInfo
        info={generalInfo}
        onChange={handleGeneralInfoChange}
        isSubmitted={isSubmitted}
      />

      {education.map((education, index) => (
        <EducationalExp
          key={index}
          education={education}
          index={index}
          onChange={handleEducationChange}
          isSubmitted={isSubmitted}
        />
      ))}
      {isSubmitted ? null : (
        <button className='button' onClick={addEducation}>
          Add Education
        </button>
      )}

      <PracticalExp
        experience={experience}
        onChange={handleExperienceChange}
        isSubmitted={isSubmitted}
      />
      <button
        className='button'
        onClick={isSubmitted ? handleEdit : handleSubmit}>
        {isSubmitted ? 'Edit Form' : 'Submit Form'}
      </button>
    </Box>
  );
}

export default CVForm;
