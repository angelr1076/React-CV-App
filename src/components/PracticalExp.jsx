import PropTypes from 'prop-types';
import {
  Box,
  Text,
  FormLabel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';

function PracticalExp({ experience, onChange, isSubmitted }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...experience, [name]: value });
  };

  return (
    <div className='form-group'>
      {isSubmitted ? (
        <div>
          {experience.companyName} {experience.positionTitle}{' '}
          {experience.responsibilities} {experience.dateFrom}{' '}
          {experience.dateUntil}
        </div>
      ) : (
        <Card>
          <CardBody>
            <FormLabel className='label' htmlFor='companyName'>
              Company Name
            </FormLabel>
            <input
              className='input'
              name='companyName'
              value={experience.companyName}
              onChange={handleInputChange}
              placeholder='Company Name'
            />
            <FormLabel className='label' htmlFor='positionTitle'>
              Position Title
            </FormLabel>
            <input
              className='input'
              name='positionTitle'
              value={experience.positionTitle}
              onChange={handleInputChange}
              placeholder='Position Title'
            />
            <FormLabel className='label' htmlFor='responsibilities'>
              Responsibilities
            </FormLabel>
            <input
              className='input'
              name='responsibilities'
              value={experience.responsibilities}
              onChange={handleInputChange}
              placeholder='Responsibilities'
            />
            <FormLabel className='label' htmlFor='dateFrom'>
              Date From
            </FormLabel>
            <input
              className='input'
              name='dateFrom'
              value={experience.dateFrom}
              onChange={handleInputChange}
              placeholder='Date From'
            />
            <FormLabel className='label' htmlFor='dateUntil'>
              Date Until
            </FormLabel>
            <input
              className='input'
              name='dateUntil'
              value={experience.dateUntil}
              onChange={handleInputChange}
              placeholder='Date Until'
            />{' '}
          </CardBody>
        </Card>
      )}
    </div>
  );
}

PracticalExp.propTypes = {
  experience: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    positionTitle: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateUntil: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default PracticalExp;
