import { useState } from 'react';

function EducationForm({ addEducation }) {
  const [formData, setFormData] = useState({
    institution: '',
    degree: '',
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
    addEducation(formData);
    setFormData({
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  return (
    <div>
      <h1>Education</h1>
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
          type='text'
          id='startDate'
          name='startDate'
          value={formData.startDate}
          onChange={handleChange}
          placeholder='Start Date'
        />
        <label htmlFor='endDate'>End Date</label>
        <input
          type='text'
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
        <button type='submit'>Add Education</button>
      </form>
    </div>
  );
}

export default EducationForm;
