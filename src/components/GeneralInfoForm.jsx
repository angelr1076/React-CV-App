import { useState } from 'react';
import { FormLabel, Input, Box, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function GeneralInfoForm({ addGeneralInfo }) {
  const [formData, setFormData] = useState({
    fullName: '',
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
  };

  const fullNameError = formData.fullName === '';

  return (
    <Box boxShadow='2xl' p='6' mb={5} rounded='md' bg='white'>
      <form className='info-form' onSubmit={handleSubmit}>
        {/* form Inputs */}
        {!fullNameError ? (
          <FormLabel htmlFor='fullName' fontSize='sm'>
            Full Name
          </FormLabel>
        ) : (
          <FormLabel htmlFor='fullName' fontSize='sm'>
            Full Name (Required)
          </FormLabel> // TODO: Required in red (later)
        )}
        <Input
          type='text'
          id='fullName'
          name='fullName'
          value={formData.fullName}
          onChange={handleChange}
          placeholder='First Name'
          isRequired
          isInvalid={fullNameError}
          fontSize='sm'
          mb={2}
        />
        <FormLabel htmlFor='phone' fontSize='sm'>
          Phone
        </FormLabel>
        <Input
          type='text'
          id='phone'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
          placeholder='Phone'
          fontSize='sm'
          mb={2}
        />
        <FormLabel htmlFor='location' fontSize='sm'>
          Location
        </FormLabel>
        <Input
          type='text'
          id='location'
          name='location'
          value={formData.location}
          onChange={handleChange}
          placeholder='Location'
          fontSize='sm'
          mb={2}
        />
        <FormLabel htmlFor='email' fontSize='sm'>
          Email
        </FormLabel>
        <Input
          type='text'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          fontSize='sm'
          mb={2}
        />
        <Button
          type='submit'
          colorScheme='teal'
          isDisabled={!formData.fullName}
          variant='outline'
          fontSize='sm'
          mt={5}>
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
