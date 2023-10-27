import { useState } from 'react';
import PropTypes from 'prop-types';

function WorkExperienceForm({ addWorkExperience }) {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addWorkExperience(formData);
    setFormData({
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      description: '',
    });
    console.log(formData);
  };

  return (
    <div>
      <h1>Work Experience</h1>
      <form className='info-form' onSubmit={handleSubmit}>
        {/* form inputs */}
        <label htmlFor='company'>Company</label>
        <input
          type='text'
          id='company'
          name='company'
          value={formData.company}
          onChange={handleChange}
          placeholder='Company'
        />
        <label htmlFor='role'>Role</label>
        <input
          type='text'
          id='role'
          name='role'
          value={formData.role}
          onChange={handleChange}
          placeholder='Role'
        />
        <label htmlFor='startDate'>Start Date</label>
        <input
          type='date'
          id='startDate'
          name='startDate'
          value={formData.startDate}
          onChange={handleChange}
          placeholder='Start Date'
        />
        <label htmlFor='endDate'>End Date</label>
        <input
          type='date'
          id='endDate'
          name='endDate'
          value={formData.endDate}
          onChange={handleChange}
          placeholder='End Date'
        />
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          id='description'
          name='description'
          value={formData.description}
          onChange={handleChange}
          placeholder='Description'
        />
        <button type='submit'>Add Work Experience</button>
      </form>
    </div>
  );
}

WorkExperienceForm.propTypes = {
  addWorkExperience: PropTypes.func.isRequired,
};

export { WorkExperienceForm };
