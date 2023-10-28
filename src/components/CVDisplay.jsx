import { useContext } from 'react';
import { CVContext } from './CVProvider';

function CVDisplay() {
  const { cvData } = useContext(CVContext);

  return (
    <div className='display'>
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
                <h4>{edu.institution}</h4>
                <p>
                  {edu.degree} {edu.major}
                </p>
                <p>
                  {edu.startDate} - {edu.endDate}
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
    </div>
  );
}

export { CVDisplay };
