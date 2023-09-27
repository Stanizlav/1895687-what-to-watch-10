import { Link } from 'react-router-dom';
import { Tabs } from '../../../consts';

type TabNavigationItemProps = {
  name: Tabs;
  active?: boolean;
  onClick?: ()=> void;
};

function TabNavigationItem({name, active = false, onClick}: TabNavigationItemProps):JSX.Element{
  const classList = `film-nav__item${active ? ' film-nav__item--active' : ''}`;
  return(
    <li className={classList} onClick={onClick}>
      <Link to="" className="film-nav__link">{name}</Link>
    </li>
  );
}

export default TabNavigationItem;
