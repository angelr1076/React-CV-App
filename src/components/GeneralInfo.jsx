// src/components/GeneralInfo.js
import PropTypes from 'prop-types';

function GeneralInfo({ info, onChange, isSubmitted }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...info, [name]: value });
  };

  return (
    <div className='form-group'>
      {' '}
      {isSubmitted ? (
        <div>
          {info.name} {info.email} {info.phone}
        </div>
      ) : (
        <div>
          <label className='label' htmlFor='name'>
            Name
          </label>
          <input
            className='input'
            name='name'
            value={info.name}
            onChange={handleInputChange}
            placeholder='Name'
          />
          <label className='label' htmlFor='email'>
            Email
          </label>
          <input
            className='input'
            name='email'
            value={info.email}
            onChange={handleInputChange}
            placeholder='Email'
          />
          <label className='label' htmlFor='phone'>
            Phone
          </label>
          <input
            className='input'
            name='phone'
            value={info.phone}
            onChange={handleInputChange}
            placeholder='Phone'
          />
        </div>
      )}
    </div>
  );
}

GeneralInfo.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default GeneralInfo;
