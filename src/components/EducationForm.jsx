import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function EducationForm({ addEducation }) {
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
    startDate: '',
    endDate: '',
    major: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addEducation(formData);
    setFormData({
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      major: '',
    });
  };

  return (
    <div>
      <h3>Education</h3>
      <form className='info-form' onSubmit={handleSubmit}>
        {/* form inputs */}
        <label htmlFor='institution'>Institution</label>
        <input
          type='text'
          id='institution'
          name='institution'
          value={formData.institution}
          onChange={handleChange}
          placeholder='Institution'
        />
        <label htmlFor='degree'>Degree</label>
        <input
          type='text'
          id='degree'
          name='degree'
          value={formData.degree}
          onChange={handleChange}
          placeholder='Degree'
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
        <label htmlFor='major'>Major</label>
        <input
          type='text'
          id='major'
          name='major'
          value={formData.major}
          onChange={handleChange}
          placeholder='major'
        />
        <Button
          type='submit'
          colorScheme='teal'
          isDisabled={
            !(formData.institution && formData.degree && formData.major)
          }
          variant='outline'>
          Add Education
        </Button>
      </form>
    </div>
  );
}

EducationForm.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export { EducationForm };
