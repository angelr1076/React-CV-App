import PropTypes from 'prop-types';
import {
  Box,
  Input,
  Button,
  Card,
  CardBody,
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

function EducationalExp({ education, index, onChange, handleDeleteEducation }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...education, [name]: value }, index);
  };

  const isError = education.schoolName === '' || education.major === '';

  return (
    <div className='form-group'>
      <Accordion key={index} defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='lg'>
                Education ({index + 1})
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize='sm'>
            <Card>
              <CardBody>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor={`schoolName${index}`} fontSize='sm'>
                    School Name
                  </FormLabel>
                  <Input
                    name='schoolName'
                    value={education.schoolName}
                    onChange={handleInputChange}
                    placeholder='School Name'
                    id={`schoolName${index}`}
                    fontSize='sm'
                  />
                  {!isError ? (
                    <FormHelperText fontSize='sm'>
                      Enter your school name.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage fontSize='sm'>
                      School name is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor={`major${index}`} fontSize='sm'>
                    Major
                  </FormLabel>
                  <Input
                    name='major'
                    value={education.major}
                    onChange={handleInputChange}
                    placeholder='Major'
                    id={`major${index}`}
                    fontSize='sm'
                  />
                  {!isError ? (
                    <FormHelperText fontSize='sm'>
                      Enter your major.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage fontSize='sm'>
                      Major is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`dateFrom${index}`} fontSize='sm'>
                    From Date
                  </FormLabel>
                  <Input
                    name='dateFrom'
                    type='date'
                    value={education.dateFrom}
                    onChange={handleInputChange}
                    id={`dateFrom${index}`}
                    mb={5}
                    fontSize='sm'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`dateTo${index}`} fontSize='sm'>
                    To Date
                  </FormLabel>
                  <Input
                    name='dateTo'
                    type='date'
                    value={education.dateTo}
                    onChange={handleInputChange}
                    id={`dateTo${index}`}
                    mb={5}
                    fontSize='sm'
                  />
                </FormControl>
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
export { EducationalExp };
