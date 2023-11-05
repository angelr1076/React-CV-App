// src/components/CVForm.js
import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';
import { v4 as uuidv4 } from 'uuid';
import { Box } from '@chakra-ui/react';

function CVForm() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [education, setEducation] = useState([
    { id: uuidv4(), schoolName: '', major: '', dateOfStudy: '' },
  ]);
  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateFrom: '',
      dateUntil: '',
    },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGeneralInfoChange = updatedInfo => {
    setGeneralInfo(updatedInfo);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { id: uuidv4(), schoolName: '', major: '', dateOfStudy: '' },
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
        dateUntil: '',
      },
    ]);
  };

  const handleExperienceChange = (updatedExperience, id) => {
    setExperience(prevExperience =>
      prevExperience.map(experience =>
        experience.id === id ? updatedExperience : experience
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

  return (
    <Box className='form-group'>
      <GeneralInfo
        info={generalInfo}
        onChange={handleGeneralInfoChange}
        isSubmitted={isSubmitted}
      />

      {education.map((education, index) => (
        <EducationalExp
          key={education.id}
          education={education}
          index={index}
          onChange={handleEducationChange}
          handleDeleteEducation={handleDeleteEducation}
          isSubmitted={isSubmitted}
        />
      ))}
      {isSubmitted ? null : (
        <button className='button' onClick={handleAddEducation}>
          Add Education
        </button>
      )}
      {experience.map((experience, index) => (
        <PracticalExp
          key={experience.id}
          experience={experience}
          index={index}
          onChange={handleExperienceChange}
          handleDeleteExperience={handleDeleteExperience}
          isSubmitted={isSubmitted}
        />
      ))}
      {isSubmitted ? null : (
        <button className='button' onClick={handleAddExperience}>
          Add Experience
        </button>
      )}
      <button
        className='button'
        onClick={isSubmitted ? handleEdit : handleSubmit}>
        {isSubmitted ? 'Edit Form' : 'Submit Form'}
      </button>
    </Box>
  );
}

export default CVForm;
