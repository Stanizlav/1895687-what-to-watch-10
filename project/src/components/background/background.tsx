import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';

type BackgroundProps = {
  backgroundImage: string,
  alt: string,
  children?: JSX.Element
}

function Background({backgroundImage, alt, children}: BackgroundProps):JSX.Element{
  return(
    <>
      <div className="film-card__bg">
        <img src={backgroundImage} alt={alt} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo/>
        {children}
        <UserBlock/>
      </header>
    </>
  );
}

export default Background;
