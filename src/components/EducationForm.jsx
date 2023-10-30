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
          <FormLabel htmlFor='institution'>Institution</FormLabel>
        ) : (
          <FormLabel htmlFor='institution'>Institution (Required)</FormLabel> // Todo Required in red (later)
        )}
        <Input
          type='text'
          id='institution'
          name='institution'
          value={formData.institution}
          onChange={handleChange}
          placeholder='Institution'
          isInvalid={institutionError}
          mb={2}
        />
        {!degreeError ? (
          <FormLabel htmlFor='degree'>Degree</FormLabel>
        ) : (
          <FormLabel htmlFor='degree'>Degree (Required)</FormLabel> // Todo Required in red (later)
        )}
        <Input
          type='text'
          id='degree'
          name='degree'
          value={formData.degree}
          onChange={handleChange}
          placeholder='Degree'
          isInvalid={degreeError}
          mb={2}
        />
        <FormLabel htmlFor='startDate'>Start Date</FormLabel>
        <Input
          type='date'
          id='startDate'
          name='startDate'
          value={formData.startDate}
          onChange={handleChange}
          placeholder='Start Date'
          mb={2}
        />
        <FormLabel htmlFor='endDate'>End Date</FormLabel>
        <Input
          type='date'
          id='endDate'
          name='endDate'
          value={formData.endDate}
          onChange={handleChange}
          placeholder='End Date'
          mb={2}
        />
        {!majorError ? (
          <FormLabel htmlFor='major'>Major</FormLabel>
        ) : (
          <FormLabel htmlFor='major'>Major (Required)</FormLabel> // Todo Required in red (later)
        )}
        <Input
          type='text'
          id='major'
          name='major'
          value={formData.major}
          onChange={handleChange}
          placeholder='major'
          isInvalid={majorError}
          mb={2}
        />
        <Button
          type='submit'
          colorScheme='teal'
          isDisabled={
            !(formData.institution && formData.degree && formData.major)
          }
          variant='outline'
          mt={5}>
          Add Education
        </Button>
      </form>
    </Box>
  );
}

EducationForm.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export { EducationForm };
