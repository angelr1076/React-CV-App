// src/components/GeneralInfo.js
import PropTypes from 'prop-types';
import {
  Box,
  Heading,
  Input,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

function GeneralInfo({ info, onChange, isSubmitted }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...info, [name]: value });
  };

  const isError = info.name === '';

  return (
    <>
      {' '}
      {isSubmitted ? (
        <div>
          {info.name} {info.email} {info.phone}
        </div>
      ) : (
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h1>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontSize='2xl'>
                  Personal Information
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <Card mb={5}>
                <CardBody>
                  <FormControl isInvalid={isError}>
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
                    {!isError ? (
                      <FormHelperText>Enter your full name.</FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        Full name is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl>
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
                    <FormHelperText>
                      {`We'll never share your email.`}
                    </FormHelperText>
                  </FormControl>
                  <FormControl>
                    <FormLabel className='label' htmlFor='phone'>
                      Phone
                    </FormLabel>
                    <Input
                      className='input'
                      name='phone'
                      value={info.phone}
                      onChange={handleInputChange}
                      placeholder='858-555-1234'
                    />
                  </FormControl>
                </CardBody>
              </Card>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
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
