import { useContext } from 'react';
import { GeneralInfoForm } from './GeneralInfoForm';
import { EducationForm } from './EducationForm';
import { WorkExperienceForm } from './WorkExperienceForm';
import { CVContext } from './CVProvider';

function CVCollector() {
  const { addGeneralInfo, addEducation, addWorkExperience } =
    useContext(CVContext); // From CVProvider

  return (
    <div>
      <GeneralInfoForm addGeneralInfo={addGeneralInfo} />
      <EducationForm addEducation={addEducation} />
      <WorkExperienceForm addWorkExperience={addWorkExperience} />
    </div>
  );
}

export { CVCollector };
