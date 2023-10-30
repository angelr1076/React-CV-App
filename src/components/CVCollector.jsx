import { useState, useContext } from 'react';
import { GeneralInfoForm } from './GeneralInfoForm';
import { EducationForm } from './EducationForm';
import { WorkExperienceForm } from './WorkExperienceForm';
import { CVContext } from './CVProvider';
import {
  Heading,
  Text,
  Button,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { GrAddCircle } from 'react-icons/gr';

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
        {/* Education Forms */}
        {educationForms.map((item, index) => (
          <Accordion key={index} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Education ({index + 1})
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <EducationForm key={index} addEducation={addEducation} />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
        <Button
          onClick={handleAddEducationForm}
          leftIcon={<GrAddCircle />}
          colorScheme='teal'
          variant='ghost'
          mt={2}>
          Education
        </Button>
      </div>
      <div>
        {/* Work forms */}
        <Heading as='h3' size='md' noOfLines={1} mb={5}>
          <Text fontSize='2xl'>Work Experience</Text>
        </Heading>
        {workForms.map((item, index) => (
          <WorkExperienceForm
            key={index}
            addWorkExperience={addWorkExperience}
          />
        ))}
        <Button
          onClick={handleAddWorkForm}
          leftIcon={<GrAddCircle />}
          colorScheme='teal'
          variant='ghost'
          mt={2}>
          Work
        </Button>
      </div>
    </section>
  );
}

export { CVCollector };
