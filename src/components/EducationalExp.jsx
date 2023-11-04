import PropTypes from 'prop-types';

function EducationalExp({ education, index, onChange, isSubmitted }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...education, [name]: value }, index);
  };
  return (
    <div className='form-group'>
      {isSubmitted ? (
        <div>
          {education.schoolName} {education.major} {education.dateOfStudy}
        </div>
      ) : (
        <div>
          <label className='label' htmlFor={`schoolName${index}`}>
            School Name
          </label>
          <input
            className='input'
            name='schoolName'
            value={education.schoolName}
            onChange={handleInputChange}
            placeholder='School Name'
            id={`schoolName${index}`}
          />
          <label className='label' htmlFor={`major${index}`}>
            Major
          </label>
          <input
            className='input'
            name='major'
            value={education.major}
            onChange={handleInputChange}
            placeholder='Major'
            id={`major${index}`}
          />
          <label className='label' htmlFor={`dateOfStudy${index}`}>
            Date of Study
          </label>
          <input
            className='input'
            name='dateOfStudy'
            value={education.dateOfStudy}
            onChange={handleInputChange}
            placeholder='Date of Study'
            id={`dateOfStudy${index}`}
          />
        </div>
      )}
    </div>
  );
}

EducationalExp.propTypes = {
  education: PropTypes.shape({
    schoolName: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    dateOfStudy: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
export default EducationalExp;
