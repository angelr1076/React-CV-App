// src/components/GeneralInfo.js
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Input,
  FormLabel,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from '@chakra-ui/react';

function GeneralInfo({ info, onChange, isSubmitted }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...info, [name]: value });
  };

  return (
    <>
      {' '}
      {isSubmitted ? (
        <Card>
          <CardBody>
            <Text>{info.name}</Text>
            <Text>{info.email}</Text> <Text>{info.phone}</Text>
          </CardBody>
        </Card>
      ) : (
        <Card mb={5}>
          <CardBody>
            <Heading as='h1' size='xl' mb={5}>
              Personal Info
            </Heading>
            <FormLabel className='label' htmlFor='name'>
              Name
            </FormLabel>
            <Input
              className='input'
              name='name'
              value={info.name}
              onChange={handleInputChange}
              placeholder='Name'
            />
            <FormLabel className='label' htmlFor='email'>
              Email
            </FormLabel>
            <Input
              className='input'
              name='email'
              value={info.email}
              onChange={handleInputChange}
              placeholder='Email'
            />
            <FormLabel className='label' htmlFor='phone'>
              Phone
            </FormLabel>
            <Input
              className='input'
              name='phone'
              value={info.phone}
              onChange={handleInputChange}
              placeholder='Phone'
            />
          </CardBody>
        </Card>
      )}
    </>
  );
}

GeneralInfo.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default GeneralInfo;
