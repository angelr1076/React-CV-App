// src/components/CVForm.js
import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';
import Title from './Title';
import { v4 as uuidv4 } from 'uuid';
import { Box, Button } from '@chakra-ui/react';

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
  // TODO: Collapse all accordions button

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

  return (
    <>
      {isSubmitted ? null : <Title title='React-CV-Canvas' />}
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
          <Box className='btn-container' mt={5} mb={5}>
            <Button
              colorScheme='twitter'
              size='sm'
              variant='outline'
              onClick={handleAddEducation}>
              Add Education
            </Button>
          </Box>
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
          <Box className='btn-container' mt={5} mb={5}>
            <Button
              colorScheme='linkedin'
              size='sm'
              variant='outline'
              onClick={handleAddExperience}>
              Add Experience
            </Button>
          </Box>
        )}
        <hr />
        <Box className='btn-container' mt={5}>
          <Button
            colorScheme={isSubmitted ? 'teal' : 'messenger'}
            size='md'
            mt={6}
            onClick={isSubmitted ? handleEdit : handleSubmit}>
            {isSubmitted ? 'Edit CV' : 'Create CV'}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default CVForm;
