import { useContext } from 'react';
import { CVContext } from './CVProvider';
import { Box } from '@chakra-ui/react';

function CVDisplay() {
  const { cvData } = useContext(CVContext);

  // useEffect(() => {
  //   console.log(cvData.generalInfo.id); // Log the ID of the generalInfo object
  // }, [cvData]);

  return (
    <Box className='display' boxShadow='lg' p='6' rounded='md' bg='white'>
      <section className='general-info'>
        {Object.keys(cvData.generalInfo).length > 0 && (
          <div className='general-info__flex'>
            <div className='row name-row'>
              <h1>{cvData.generalInfo.fullName}</h1>
            </div>
            <div className='row contact-row'>
              {cvData.generalInfo.phone && `${cvData.generalInfo.phone} |`}{' '}
              {cvData.generalInfo.location &&
                `${cvData.generalInfo.location} |`}{' '}
              {cvData.generalInfo.email}
            </div>
          </div>
        )}
      </section>
      <section className='education'>
        {cvData.education.length > 0 && (
          <>
            <h2>Education</h2>

            {cvData.education.map((edu, index) => (
              <div key={index} className='education-item'>
                {/* TODO: Add ID to this div above */}
                <h4>{edu.institution}</h4>
                <p>
                  {edu.degree} {edu.major}
                </p>
                <p>
                  {edu.startDate && `${edu.startDate} -`} {edu.endDate}
                </p>
              </div>
            ))}
          </>
        )}
      </section>
      <section className='work-experience'>
        {cvData.workExperience.length > 0 && (
          <>
            <h2>Experience</h2>
            {cvData.workExperience.map((job, index) => (
              <div key={index} className='work-item'>
                <h4>{job.company}</h4>
                <p>
                  {job.role} | {job.location}
                </p>
                <p>
                  {job.startDate} - {job.endDate}
                </p>
                <p>{job.responsibilities}</p>
              </div>
            ))}
          </>
        )}
      </section>
    </Box>
  );
}

export { CVDisplay };
