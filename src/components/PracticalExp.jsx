import PropTypes from 'prop-types';
import {
  Box,
  Textarea,
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

function PracticalExp({ experience, index, onChange, handleDeleteExperience }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...experience, [name]: value }, index);
  };

  const isError =
    experience.companyName === '' || experience.positionTitle === '';

  return (
    <div className='form-group'>
      <Accordion key={index} defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='lg'>
                Experience ({index + 1})
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize='sm'>
            <Card>
              <CardBody>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor={`companyName${index}`} fontSize='sm'>
                    Company Name
                  </FormLabel>
                  <Input
                    name='companyName'
                    value={experience.companyName}
                    onChange={handleInputChange}
                    placeholder='Company Name'
                    id={`companyName${index}`}
                    fontSize='sm'
                  />
                  {!isError ? (
                    <FormHelperText fontSize='sm'>
                      Enter your company name.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage fontSize='sm'>
                      Company name is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor={`positionTitle${index}`} fontSize='sm'>
                    Position Title
                  </FormLabel>
                  <Input
                    name='positionTitle'
                    value={experience.positionTitle}
                    onChange={handleInputChange}
                    placeholder='Position Title'
                    id={`positionTitle${index}`}
                    fontSize='sm'
                  />
                  {!isError ? (
                    <FormHelperText fontSize='sm'>
                      Enter your position.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage fontSize='sm'>
                      Position is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`responsibilities${index}`} fontSize='sm'>
                    Responsibilities
                  </FormLabel>
                  <Textarea
                    name='responsibilities'
                    value={experience.responsibilities}
                    onChange={handleInputChange}
                    placeholder='Responsibilities'
                    id={`responsibilities${index}`}
                    fontSize='sm'
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`dateFrom${index}`} fontSize='sm'>
                    From Date
                  </FormLabel>
                  <Input
                    name='dateFrom'
                    type='date'
                    value={experience.dateFrom}
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
                    value={experience.dateTo}
                    onChange={handleInputChange}
                    id={`dateTo${index}`}
                    mb={5}
                    fontSize='sm'
                  />
                </FormControl>
                <Button
                  colorScheme='red'
                  size='sm'
                  onClick={() => handleDeleteExperience(experience.id)}>
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

PracticalExp.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    positionTitle: PropTypes.string.isRequired,
    responsibilities: PropTypes.string,
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  handleDeleteExperience: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export { PracticalExp };
