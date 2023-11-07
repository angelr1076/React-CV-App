import { useContext } from 'react';
import { CVContext } from '../contexts/CVContext';
import { Box } from '@chakra-ui/react';

const CVDisplay = () => {
  const { generalInfo, education, experience } = useContext(CVContext);
  console.log({ generalInfo, education, experience });
  return (
    <Box className='cv-display'>
      <div>{generalInfo.name}</div>
      <div>{generalInfo.email}</div>
      <div>{generalInfo.phone}</div>
      <div>
        {!education ? ':' : 'Education:'}
        {education.map(edu => (
          <div key={edu.id}>
            <div>{edu.schoolName}</div>
            <div>{edu.major}</div>
            <div>{edu.dateFrom}</div>
            <div>{edu.dateTo}</div>
          </div>
        ))}
      </div>
      <div>
        {!experience ? ':' : 'Experience:'}
        {experience.map(exp => (
          <div key={exp.id}>
            <div>{exp.companyName}</div>
            <div>{exp.positionTitle}</div>
            <div>{exp.responsibilities}</div>
            <div>{exp.dateFrom}</div>
            <div>{exp.dateTo}</div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export { CVDisplay };
