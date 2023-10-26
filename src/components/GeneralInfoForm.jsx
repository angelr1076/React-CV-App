import { useState } from 'react';

function GeneralInfoForm() {
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
    // Display fields on CVDisplay element
  };

  return (
    <div>
      <h1>General Info</h1>
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
        />
        <label htmlFor='lname'>Last Name</label>
        <input
          type='text'
          id='lname'
          name='lname'
          value={formData.lname}
          onChange={handleChange}
          placeholder='Last Name'
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
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}

export { GeneralInfoForm };
