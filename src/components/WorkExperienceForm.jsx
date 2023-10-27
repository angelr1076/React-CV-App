import { useState } from 'react';
import { FormLabel, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function WorkExperienceForm({ addWorkExperience }) {
  const [formData, setFormData] = useState({
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
    setFormData({
      company: '',
      role: '',
      startDate: '',
      endDate: '',
      responsibilities: '',
    });
  };

  const companyError = formData.company === '';
  const roleError = formData.role === '';
  const responsibilitiesError = formData.responsibilities === '';

  return (
    <div>
      <Heading as='h3' size='md' noOfLines={1}>
        Work Experience
      </Heading>
      <form className='info-form' onSubmit={handleSubmit}>
        {/* form Inputs */}
        {!companyError ? (
          <FormLabel htmlFor='company'>Company</FormLabel>
        ) : (
          <FormLabel htmlFor='company'>Company (Required)</FormLabel> // Todo Required in red (later)
        )}
        <Input
          type='text'
          id='company'
          name='company'
          value={formData.company}
          onChange={handleChange}
          placeholder='Company'
          isInvalid={companyError}
        />
        {!roleError ? (
          <FormLabel htmlFor='role'>Role</FormLabel>
        ) : (
          <FormLabel htmlFor='role'>Role (Required)</FormLabel> // Todo Required in red (later)
        )}
        <Input
          type='text'
          id='role'
          name='role'
          value={formData.role}
          onChange={handleChange}
          placeholder='Role'
          isInvalid={roleError}
        />
        <label htmlFor='startDate'>Start Date</label>
        <Input
          type='date'
          id='startDate'
          name='startDate'
          value={formData.startDate}
          onChange={handleChange}
          placeholder='Start Date'
        />
        <label htmlFor='endDate'>End Date</label>
        <Input
          type='date'
          id='endDate'
          name='endDate'
          value={formData.endDate}
          onChange={handleChange}
          placeholder='End Date'
        />
        {!responsibilitiesError ? (
          <FormLabel htmlFor='responsibilities'>responsibilities</FormLabel>
        ) : (
          <FormLabel htmlFor='responsibilities'>
            responsibilities (Required)
          </FormLabel> // Todo Required in red (later)
        )}
        <label htmlFor='responsibilities'>responsibilities</label>
        <Input
          type='text'
          id='responsibilities'
          name='responsibilities'
          value={formData.responsibilities}
          onChange={handleChange}
          placeholder='responsibilities'
          isInvalid={responsibilitiesError}
        />
        <Button
          type='submit'
          colorScheme='teal'
          isDisabled={
            !(formData.company && formData.role && formData.responsibilities)
          }
          variant='outline'>
          Add Work
        </Button>
      </form>
    </div>
  );
}

WorkExperienceForm.propTypes = {
  addWorkExperience: PropTypes.func.isRequired,
};

export { WorkExperienceForm };
