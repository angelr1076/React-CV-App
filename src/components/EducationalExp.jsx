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
  return (
    <div className='form-group'>
      {isSubmitted ? (
        <div>
          {education.schoolName} {education.major} {education.dateOfStudy}
        </div>
      ) : (
        <Accordion key={index} defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as='span' flex='1' textAlign='left' fontSize='2xl'>
                  Education
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Card>
                <CardBody>
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
                  <FormLabel className='label' htmlFor={`dateOfStudy${index}`}>
                    Date of Study
                  </FormLabel>
                  <Input
                    className='input'
                    name='dateOfStudy'
                    value={education.dateOfStudy}
                    onChange={handleInputChange}
                    placeholder='Date of Study'
                    id={`dateOfStudy${index}`}
                    mb={5}
                  />
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
    dateOfStudy: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  handleDeleteEducation: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
export default EducationalExp;
