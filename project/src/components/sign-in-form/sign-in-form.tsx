import { FormEvent, useRef } from 'react';
import { isEmail, isPassword } from '../../utils/validation-utils';
import { toast } from 'react-toastify';
import AuthData from '../../types/auth-data';
import { useAppDispatch } from '../../hooks/store-hooks/store-hooks';
import { logIn } from '../../store/thunk-actions';

function SignInForm():JSX.Element{
  const dispatch = useAppDispatch();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(emailRef.current !== null && passwordRef.current !== null){
      const email = emailRef.current.value;
      if(!isEmail(email)){
        toast.warn('Please type a correct email');
        return;
      }
      const password = passwordRef.current.value;
      if(!isPassword(password)){
        toast.warn('Password must contain at least a letter and a digit');
        return;
      }
      const authData: AuthData = {email, password};
      dispatch(logIn(authData));
    }
  };

  return(
    <form action="#" className="sign-in__form" onSubmit={handleFormSubmit}>
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={emailRef} required/>
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} required/>
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit">Sign in</button>
      </div>
    </form>
  );
}

export default SignInForm;
