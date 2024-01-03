import styled from 'styled-components';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

const Form = styled.form`
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  background: white;
`;

const NewPlace = () => {
  return (
    <Form action='' className='placeForm'>
      <Input
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
      />
    </Form>
  );
};

export default NewPlace;
