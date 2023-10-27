import { useContext } from 'react';
import { GeneralInfoForm } from './GeneralInfoForm';
import { EducationForm } from './EducationForm';
import { WorkExperienceForm } from './WorkExperienceForm';
import { CVContext } from './CVProvider';
import { Heading } from '@chakra-ui/react';

function CVCollector() {
  const { addGeneralInfo, addEducation, addWorkExperience } =
    useContext(CVContext);

  return (
    <div>
      <Heading as='h2' size='2xl' noOfLines={1}>
        CV Collector
      </Heading>
      <GeneralInfoForm addGeneralInfo={addGeneralInfo} />
      <EducationForm addEducation={addEducation} />
      <WorkExperienceForm addWorkExperience={addWorkExperience} />
    </div>
  );
}

export { CVCollector };
