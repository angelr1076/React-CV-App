import { useContext } from 'react';
import { CVContext } from '../contexts/CVContext';
import { GeneralInfo } from './GeneralInfo';
import { EducationalExp } from './EducationalExp';
import { PracticalExp } from './PracticalExp';
import Title from './Title';
import { Box, Button } from '@chakra-ui/react';

function CVForm() {
  const {
    generalInfo,
    education,
    experience,
    isSubmitted,
    handleGeneralInfoChange,
    handleAddEducation,
    handleEducationChange,
    handleDeleteEducation,
    handleAddExperience,
    handleExperienceChange,
    handleDeleteExperience,
    handleSubmit,
    handleEdit,
  } = useContext(CVContext);
  return (
    <Box>
      {isSubmitted ? null : <Title title='React-CV-Canvas' />}
      <Box className='form-group'>
        <GeneralInfo
          info={generalInfo}
          onChange={handleGeneralInfoChange}
          isSubmitted={isSubmitted}
        />
        <hr />
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
        <hr />
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
    </Box>
  );
}

export { CVForm };
