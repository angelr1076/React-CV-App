import { useState, useContext } from 'react';
import { GeneralInfoForm } from './GeneralInfoForm';
import { EducationForm } from './EducationForm';
import { WorkExperienceForm } from './WorkExperienceForm';
import { CVContext } from './CVProvider';
import { Heading, Text, Button } from '@chakra-ui/react';

function CVCollector() {
  const { addGeneralInfo, addEducation, addWorkExperience } =
    useContext(CVContext); // From CVProvider
  const [educationForms, setEducationForms] = useState([0]);
  const [workForms, setWorkForms] = useState([0]);

  const handleAddEducationForm = () => {
    setEducationForms(prevForms => [...prevForms, prevForms.length]);
  };
  const handleAddWorkForm = () => {
    setWorkForms(prevForms => [...prevForms, prevForms.length]);
  };

  return (
    <section className='forms'>
      <div>
        <Heading as='h3' size='md' noOfLines={1} mb={5}>
          <Text fontSize='2xl'>Personal Details</Text>
        </Heading>
        <GeneralInfoForm addGeneralInfo={addGeneralInfo} />
      </div>
      <div>
        <Heading as='h3' size='md' noOfLines={1} mb={5}>
          <Text fontSize='2xl'>Education</Text>
        </Heading>
        {educationForms.map((number, index) => (
          <EducationForm key={index} addEducation={addEducation} />
        ))}
        <Button
          onClick={handleAddEducationForm}
          variant='outline'
          colorScheme='teal'
          mt={2}>
          + Education
        </Button>
      </div>
      <div>
        <Heading as='h3' size='md' noOfLines={1} mb={5}>
          <Text fontSize='2xl'>Work Experience</Text>
        </Heading>
        {workForms.map((number, index) => (
          <WorkExperienceForm
            key={index}
            addWorkExperience={addWorkExperience}
          />
        ))}
        <Button
          onClick={handleAddWorkForm}
          variant='outline'
          colorScheme='teal'
          mt={2}>
          + Work
        </Button>
      </div>
    </section>
  );
}

export { CVCollector };
