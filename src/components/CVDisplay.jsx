import { useContext } from 'react';
import { CVContext } from './CVProvider';

function CVDisplay() {
  const { cvData } = useContext(CVContext);

  return (
    <>
      <div className='display'>
        <section className='general-info'>
          <h2>
            {cvData.generalInfo.fname} {cvData.generalInfo.lname}
          </h2>
          {cvData.generalInfo.phone} {cvData.generalInfo.location}{' '}
          {cvData.generalInfo.email}
        </section>
        <section className='education'>
          {cvData.education.map((edu, index) => (
            <div key={index}>
              <h2>{edu.institution}</h2>
              <p>
                {edu.degree} {edu.major}
              </p>
              <p>
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>
        <section className='work-experience'>
          {cvData.workExperience.map((job, index) => (
            <div key={index}>
              <h2>{job.company}</h2>
              <p>
                {job.role} {job.location}
              </p>
              <p>
                {job.startDate} - {job.endDate}
              </p>
              <p>{job.responsibilities}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export { CVDisplay };
