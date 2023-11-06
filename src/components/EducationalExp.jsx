import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Input,
  Button,
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

function EducationalExp({
  education,
  index,
  onChange,
  handleDeleteEducation,
  isSubmitted,
}) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...education, [name]: value }, index);
  };

  const isError = education.schoolName === '' || education.major === '';

  return (
    <div className='form-group'>
      {isSubmitted ? (
        <div>
          {education.schoolName} {education.major} {education.dateFrom}{' '}
          {education.dateTo}
        </div>
      ) : (
        <Accordion key={index} defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontSize='2xl'>
                  Education ({index + 1})
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Card>
                <CardBody>
                  <FormControl isInvalid={isError}>
                    <FormLabel className='label' htmlFor={`schoolName${index}`}>
                      School Name
                    </FormLabel>
                    <Input
                      className='input'
                      name='schoolName'
                      value={education.schoolName}
                      onChange={handleInputChange}
                      placeholder='School Name'
                      id={`schoolName${index}`}
                    />
                    {!isError ? (
                      <FormHelperText>Enter your school name.</FormHelperText>
                    ) : (
                      <FormErrorMessage>
                        School name is required.
                      </FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl isInvalid={isError}>
                    <FormLabel className='label' htmlFor={`major${index}`}>
                      Major
                    </FormLabel>
                    <Input
                      className='input'
                      name='major'
                      value={education.major}
                      onChange={handleInputChange}
                      placeholder='Major'
                      id={`major${index}`}
                    />
                    {!isError ? (
                      <FormHelperText>Enter your major.</FormHelperText>
                    ) : (
                      <FormErrorMessage>Major is required.</FormErrorMessage>
                    )}
                  </FormControl>
                  <FormControl>
                    <FormLabel className='label' htmlFor={`dateFrom${index}`}>
                      From Date
                    </FormLabel>
                    <Input
                      className='input'
                      name='dateFrom'
                      type='date'
                      value={education.dateFrom}
                      onChange={handleInputChange}
                      placeholder='From Date'
                      id={`dateFrom${index}`}
                      mb={5}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel className='label' htmlFor={`dateTo${index}`}>
                      To Date
                    </FormLabel>
                    <Input
                      className='input'
                      name='dateTo'
                      type='date'
                      value={education.dateTo}
                      onChange={handleInputChange}
                      placeholder='To Date'
                      id={`dateTo${index}`}
                      mb={5}
                    />
                  </FormControl>
                  {/* TODO: Left align button */}
                  <Button
                    colorScheme='red'
                    size='sm'
                    onClick={() => handleDeleteEducation(education.id)}>
                    Delete
                  </Button>
                </CardBody>
              </Card>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}

EducationalExp.propTypes = {
  education: PropTypes.shape({
    id: PropTypes.string.isRequired,
    schoolName: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  handleDeleteEducation: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
export default EducationalExp;
