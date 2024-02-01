import Icon from '../../components/icon/icon';
import Logo from '../../components/logo/logo';
import PageFooter from '../../components/page-footer/page-footer';
import SignInForm from '../../components/sign-in-form/sign-in-form';

function SignInScreen(): JSX.Element {
  return(
    <>
      <Icon/>
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo/>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <SignInForm/>
        </div>
        <PageFooter/>
      </div>
    </>
  );
}

export default SignInScreen;
