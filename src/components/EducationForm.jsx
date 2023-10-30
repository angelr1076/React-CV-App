import { useState } from 'react';
import { FormLabel, Input, Box, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function EducationForm({ addEducation }) {
  const [formData, setFormData] = useState({
    id: uuidv4(),
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
    console.log(formData);
  };

  const institutionError = formData.institution === '';
  const degreeError = formData.degree === '';
  const majorError = formData.major === '';

  return (
    <Box boxShadow='2xl' p={6} mb={5} rounded='md' bg='white'>
      <form className='info-form' onSubmit={handleSubmit}>
        {/* form Inputs */}
        {!institutionError ? (
          <FormLabel htmlFor='institution' fontSize='sm'>
            Institution
          </FormLabel>
        ) : (
          <FormLabel htmlFor='institution' fontSize='sm'>
            Institution (Required)
          </FormLabel> // TODO: Required in red (later)
        )}
        <Input
          type='text'
          id='id'
          name='id'
          value={formData.id}
          onChange={handleChange}
          hidden
        />
        <Input
          type='text'
          id='institution'
          name='institution'
          value={formData.institution}
          onChange={handleChange}
          placeholder='Institution'
          isInvalid={institutionError}
          fontSize='sm'
          mb={2}
        />
        {!degreeError ? (
          <FormLabel htmlFor='degree' fontSize='sm'>
            Degree
          </FormLabel>
        ) : (
          <FormLabel htmlFor='degree' fontSize='sm'>
            Degree (Required)
          </FormLabel> // TODO: Required in red (later)
        )}
        <Input
          type='text'
          id='degree'
          name='degree'
          value={formData.degree}
          onChange={handleChange}
          placeholder='Degree'
          isInvalid={degreeError}
          fontSize='sm'
          mb={2}
        />
        <FormLabel htmlFor='startDate' fontSize='sm'>
          Start Date
        </FormLabel>
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
        <FormLabel htmlFor='endDate' fontSize='sm'>
          End Date
        </FormLabel>
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
        {!majorError ? (
          <FormLabel htmlFor='major' fontSize='sm'>
            Major
          </FormLabel>
        ) : (
          <FormLabel htmlFor='major' fontSize='sm'>
            Major (Required)
          </FormLabel> // Todo Required in red (later)
        )}
        <Input
          type='text'
          id='major'
          name='major'
          value={formData.major}
          onChange={handleChange}
          placeholder='major'
          isInvalid={majorError}
          fontSize='sm'
          mb={2}
        />
        <Button
          type='submit'
          colorScheme='green'
          isDisabled={
            !(formData.institution && formData.degree && formData.major)
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

EducationForm.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export { EducationForm };
