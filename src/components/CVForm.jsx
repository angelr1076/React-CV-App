// src/components/CVForm.js
import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import EducationalExp from './EducationalExp';
import PracticalExp from './PracticalExp';
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

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
    const newEducation = education.slice();
    newEducation[index] = updatedEducation;
    setEducation(newEducation);
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
        <Accordion key={index} defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontSize='2xl'>
                  Education {index + 1}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <EducationalExp
                key={index}
                education={education}
                index={index}
                onChange={handleEducationChange}
                isSubmitted={isSubmitted}
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
      <button className='button' onClick={addEducation}>
        Add Education
      </button>
      <Heading as='h1' size='xl' mb={5}>
        Experience
      </Heading>
      <PracticalExp
        experience={experience}
        onChange={handleExperienceChange}
        isSubmitted={isSubmitted}
      />
      <button
        className='button'
        onClick={isSubmitted ? handleEdit : handleSubmit}>
        {isSubmitted ? 'Edit' : 'Submit'}
      </button>
    </Box>
  );
}

export default CVForm;
