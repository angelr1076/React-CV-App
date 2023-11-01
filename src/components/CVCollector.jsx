import { useState, useContext } from 'react';
import { GeneralInfoForm } from './GeneralInfoForm';
import { EducationForm } from './EducationForm';
import { WorkExperienceForm } from './WorkExperienceForm';
import { CVContext } from './CVProvider';
import { v4 as uuidv4 } from 'uuid';

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
  Divider,
} from '@chakra-ui/react';
import { GrAddCircle } from 'react-icons/gr';

function CVCollector() {
  const { addGeneralInfo, addEducation, addWorkExperience } =
    useContext(CVContext); // From CVProvider
  const [educationForms, setEducationForms] = useState([{ id: uuidv4() }]);
  const [workForms, setWorkForms] = useState([0]);

  const handleAddEducationForm = () => {
    setEducationForms(prevForms => [...prevForms, { id: uuidv4() }]);
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
      <Divider mt={5} mb={5} />
      <div>
        <Heading as='h3' size='md' noOfLines={1} mb={5}>
          <Text fontSize='2xl'>Education</Text>
        </Heading>
        {/* Education Forms */}
        {educationForms.map((form, index) => (
          <Accordion key={form.id} allowMultiple>
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
                <EducationForm
                  key={index}
                  id={form.id.toString()}
                  addEducation={addEducation}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
        {/* New Education Form */}
        <Button
          onClick={handleAddEducationForm}
          leftIcon={<GrAddCircle />}
          colorScheme='teal'
          variant='ghost'
          mt={2}>
          Education
        </Button>
      </div>
      <Divider mt={5} mb={5} />
      <div>
        {/* Work forms */}
        <Heading as='h3' size='md' noOfLines={1} mb={5}>
          <Text fontSize='2xl'>Work Experience</Text>
        </Heading>
        {workForms.map((_, index) => (
          <Accordion key={index} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Work ({index + 1})
                  </Box>

                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <WorkExperienceForm
                  key={index}
                  addWorkExperience={addWorkExperience}
                />
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
        {/* New Work Form */}
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
