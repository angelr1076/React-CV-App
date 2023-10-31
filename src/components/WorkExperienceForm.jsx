import { useState } from 'react';
import { FormLabel, Input, Box, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function WorkExperienceForm({ addWorkExperience }) {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    company: '',
    role: '',
    startDate: '',
    endDate: '',
    responsibilities: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addWorkExperience(formData);
  };

  const companyError = formData.company === '';
  const roleError = formData.role === '';
  const responsibilitiesError = formData.responsibilities === '';

  return (
    <Box boxShadow='2xl' p={6} mb={5} rounded='md' bg='white'>
      <form className='info-form' onSubmit={handleSubmit}>
        {/* form Inputs */}
        {!companyError ? (
          <FormLabel htmlFor='company' fontSize='sm'>
            Company
          </FormLabel>
        ) : (
          <FormLabel htmlFor='company' fontSize='sm'>
            Company (Required)
          </FormLabel> // TODO: Required in red (later)
        )}
        <Input
          type='text'
          id='company'
          name='company'
          value={formData.company}
          onChange={handleChange}
          placeholder='Company'
          isInvalid={companyError}
          fontSize='sm'
          mb={2}
        />
        {!roleError ? (
          <FormLabel htmlFor='role' fontSize='sm'>
            Role
          </FormLabel>
        ) : (
          <FormLabel htmlFor='role' fontSize='sm'>
            Role (Required)
          </FormLabel> // TODO: Required in red (later)
        )}
        <Input
          type='text'
          id='role'
          name='role'
          value={formData.role}
          onChange={handleChange}
          placeholder='Role'
          isInvalid={roleError}
          fontSize='sm'
          mb={2}
        />
        <label htmlFor='startDate' fontSize='sm'>
          Start Date
        </label>
        <Input
          type='date'
          id='startDate'
          name='startDate'
          value={formData.startDate}
          onChange={handleChange}
          placeholder='Start Date'
          fontSize='sm'
          mb={2}
        />
        <label htmlFor='endDate' fontSize='sm'>
          End Date
        </label>
        <Input
          type='date'
          id='endDate'
          name='endDate'
          value={formData.endDate}
          onChange={handleChange}
          placeholder='End Date'
          fontSize='sm'
          mb={2}
        />
        {!responsibilitiesError ? (
          <FormLabel htmlFor='responsibilities' fontSize='sm'>
            Responsibilities
          </FormLabel>
        ) : (
          <FormLabel htmlFor='responsibilities' fontSize='sm'>
            Responsibilities (Required)
          </FormLabel> // Todo Required in red (later)
        )}
        <Input
          type='text'
          id='responsibilities'
          name='responsibilities'
          value={formData.responsibilities}
          onChange={handleChange}
          placeholder='responsibilities'
          isInvalid={responsibilitiesError}
          fontSize='sm'
          mb={2}
        />
        <Button
          type='submit'
          colorScheme='teal'
          isDisabled={
            !(formData.company && formData.role && formData.responsibilities)
          }
          variant='outline'
          fontSize='sm'
          mt={5}>
          Save
        </Button>
        <Button
          type='button'
          colorScheme='yellow'
          variant='outline'
          fontSize='sm'
          mt={5}>
          Edit
        </Button>
        <Button type='button' colorScheme='red' fontSize='sm' mt={5}>
          Delete
        </Button>
      </form>
    </Box>
  );
}

WorkExperienceForm.propTypes = {
  addWorkExperience: PropTypes.func.isRequired,
};

export { WorkExperienceForm };
