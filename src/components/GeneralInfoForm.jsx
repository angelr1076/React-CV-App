import { useState } from 'react';
import { FormLabel, Input } from '@chakra-ui/react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
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

  const fnameError = formData.fname === '';
  const lnameError = formData.lname === '';

  return (
    <Box p={5} borderRadius='5'>
      <Heading as='h3' size='md' noOfLines={1}>
        Personal Details
      </Heading>
      <form className='info-form' onSubmit={handleSubmit}>
        {/* form Inputs */}
        {!fnameError ? (
          <FormLabel htmlFor='fname'>First Name</FormLabel>
        ) : (
          <FormLabel htmlFor='fname'>First Name (Required)</FormLabel> // Todo Required in red (later)
        )}
        <Input
          type='text'
          id='fname'
          name='fname'
          value={formData.fname}
          onChange={handleChange}
          placeholder='First Name'
          isRequired
          isInvalid={fnameError}
        />

        {!lnameError ? (
          <FormLabel htmlFor='lname'>Last Name</FormLabel>
        ) : (
          <FormLabel htmlFor='lname'>Last Name (Required)</FormLabel> // Todo Required in red (later)
        )}
        <Input
          type='text'
          id='lname'
          name='lname'
          value={formData.lname}
          onChange={handleChange}
          placeholder='Last Name'
          isRequired
          isInvalid={lnameError}
        />
        <FormLabel htmlFor='phone'>Phone</FormLabel>
        <Input
          type='text'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Phone'
        />
        <FormLabel htmlFor='location'>Location</FormLabel>
        <Input
          type='text'
          id='location'
          name='location'
          value={formData.location}
          onChange={handleChange}
          placeholder='Location'
        />
        <FormLabel htmlFor='email'>Email</FormLabel>
        <Input
          type='text'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
        />
        <Button
          type='submit'
          colorScheme='teal'
          isDisabled={!(formData.fname && formData.lname)}
          variant='outline'>
          Add Details
        </Button>
      </form>
    </Box>
  );
}

GeneralInfoForm.propTypes = {
  addGeneralInfo: PropTypes.func.isRequired,
};

export { GeneralInfoForm };
