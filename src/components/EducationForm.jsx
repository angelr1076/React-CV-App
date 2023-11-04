import { useState } from 'react';
import { FormLabel, Input, Box, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function EducationForm({ id, addEducation }) {
  const [formData, setFormData] = useState({
    id,
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
    addEducation({ ...formData, id });
    console.log({ ...formData, id });
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
          placeholder='ID'
          isReadOnly
          fontSize='sm'
          mb={2}
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
        <div className='btn-container'>
          <Button
            type='submit'
            className='btn btn-save'
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
            className='btn btn-cancel'
            colorScheme='yellow'
            variant='outline'
            fontSize='sm'
            mt={5}>
            Cancel
          </Button>
          <Button
            type='button'
            className='btn btn-delete'
            colorScheme='red'
            fontSize='sm'
            mt={5}>
            Delete
          </Button>
        </div>
      </form>
    </Box>
  );
}

EducationForm.propTypes = {
  id: PropTypes.string,
  addEducation: PropTypes.func.isRequired,
};

export { EducationForm };
