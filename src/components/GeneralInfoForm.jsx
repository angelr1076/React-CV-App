import { useState } from 'react';
import { Button } from './Button';
import PropTypes from 'prop-types';

function GeneralInfoForm({ addGeneralInfo }) {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    location: '',
    email: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addGeneralInfo(formData);
    setFormData({
      fname: '',
      lname: '',
      phone: '',
      location: '',
      email: '',
    });
  };

  return (
    <div>
      <h3>Personal Details</h3>
      <form className='info-form' onSubmit={handleSubmit}>
        {/* form inputs */}
        <label htmlFor='fname'>First Name</label>
        <input
          type='text'
          id='fname'
          name='fname'
          value={formData.fname}
          onChange={handleChange}
          placeholder='First Name'
          required
        />
        <label htmlFor='lname'>Last Name</label>
        <input
          type='text'
          id='lname'
          name='lname'
          value={formData.lname}
          onChange={handleChange}
          placeholder='Last Name'
          required
        />
        <label htmlFor='phone'>Phone</label>
        <input
          type='text'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Phone'
        />
        <label htmlFor='location'>Location</label>
        <input
          type='text'
          id='location'
          name='location'
          value={formData.location}
          onChange={handleChange}
          placeholder='Location'
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <Button
          type='submit'
          value='Submit'
          text='Add Details'
          disabled={!(formData.fname && formData.lname)}
        />
      </form>
    </div>
  );
}

GeneralInfoForm.propTypes = {
  addGeneralInfo: PropTypes.func.isRequired,
};

export { GeneralInfoForm };
