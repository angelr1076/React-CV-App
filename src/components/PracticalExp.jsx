import PropTypes from 'prop-types';

function PracticalExp({ experience, onChange, isSubmitted }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...experience, [name]: value });
  };

  return (
    <div className='form-group'>
      {isSubmitted ? (
        <div>
          {experience.companyName} {experience.positionTitle}{' '}
          {experience.responsibilities} {experience.dateFrom}{' '}
          {experience.dateUntil}
        </div>
      ) : (
        <div>
          <label className='label' htmlFor='companyName'>
            Company Name
          </label>
          <input
            className='input'
            name='companyName'
            value={experience.companyName}
            onChange={handleInputChange}
            placeholder='Company Name'
          />
          <label className='label' htmlFor='positionTitle'>
            Position Title
          </label>
          <input
            className='input'
            name='positionTitle'
            value={experience.positionTitle}
            onChange={handleInputChange}
            placeholder='Position Title'
          />
          <label className='label' htmlFor='responsibilities'>
            Responsibilities
          </label>
          <input
            className='input'
            name='responsibilities'
            value={experience.responsibilities}
            onChange={handleInputChange}
            placeholder='Responsibilities'
          />
          <label className='label' htmlFor='dateFrom'>
            Date From
          </label>
          <input
            className='input'
            name='dateFrom'
            value={experience.dateFrom}
            onChange={handleInputChange}
            placeholder='Date From'
          />
          <label className='label' htmlFor='dateUntil'>
            Date Until
          </label>
          <input
            className='input'
            name='dateUntil'
            value={experience.dateUntil}
            onChange={handleInputChange}
            placeholder='Date Until'
          />
        </div>
      )}
    </div>
  );
}

PracticalExp.propTypes = {
  experience: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    positionTitle: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateUntil: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default PracticalExp;
