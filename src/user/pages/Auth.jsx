import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
} from '../../shared/util/validators';

function Auth() {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const authSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Card className='authentication'>
      <h2>Login</h2>
      <hr />
      <form onSubmit={authSubmit}>
        <Input
          element='input'
          id='email'
          type='email'
          label='E-mail'
          validators={[VALIDATOR_EMAIL()]}
          errorText='Please enter a valid email address.'
          onInput={inputHandler}
        />
        <Input
          element='input'
          id='password'
          type='password'
          label='Password'
          validators={[VALIDATOR_MAXLENGTH(5)]}
          errorText='Please enter a valid password, at least 5 characters.'
          onInput={inputHandler}
        />
        <Button type='submit' disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
}

export default Auth;
