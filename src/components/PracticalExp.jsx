import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Input,
  Button,
  FormLabel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function PracticalExp({
  experience,
  index,
  onChange,
  handleDeleteExperience,
  isSubmitted,
}) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...experience, [name]: value }, index);
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
        <Accordion key={index} defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontSize='2xl'>
                  Experience ({index + 1})
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Card>
                <CardBody>
                  <FormLabel className='label' htmlFor={`companyName${index}`}>
                    Company Name
                  </FormLabel>
                  <Input
                    className='input'
                    name='companyName'
                    value={experience.companyName}
                    onChange={handleInputChange}
                    placeholder='Company Name'
                    id={`companyName${index}`}
                  />
                  <FormLabel
                    className='label'
                    htmlFor={`positionTitle${index}`}>
                    Position Title
                  </FormLabel>
                  <Input
                    className='input'
                    name='positionTitle'
                    value={experience.positionTitle}
                    onChange={handleInputChange}
                    placeholder='Position Title'
                    id={`positionTitle${index}`}
                  />
                  <FormLabel
                    className='label'
                    htmlFor={`responsibilities${index}`}>
                    Responsibilities
                  </FormLabel>
                  <Input
                    className='input'
                    name='responsibilities'
                    value={experience.responsibilities}
                    onChange={handleInputChange}
                    placeholder='Responsibilities'
                    id={`responsibilities${index}`}
                  />
                  <FormLabel className='label' htmlFor={`dateFrom${index}`}>
                    Date From
                  </FormLabel>
                  <Input
                    className='input'
                    name='dateFrom'
                    value={experience.dateFrom}
                    onChange={handleInputChange}
                    placeholder='Date From'
                    id={`dateFrom${index}`}
                  />
                  <FormLabel className='label' htmlFor={`dateUntil${index}`}>
                    Date Until
                  </FormLabel>
                  <Input
                    className='input'
                    name='dateUntil'
                    value={experience.dateUntil}
                    onChange={handleInputChange}
                    placeholder='Date Until'
                    id={`dateUntil${index}`}
                    mb={5}
                  />
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
      )}
    </div>
  );
}

PracticalExp.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    positionTitle: PropTypes.string.isRequired,
    responsibilities: PropTypes.string.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateUntil: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  handleDeleteExperience: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default PracticalExp;
