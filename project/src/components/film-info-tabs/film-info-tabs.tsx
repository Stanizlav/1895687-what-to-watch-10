import FilmInfo from '../../types/film-info';
import { Tabs } from '../../consts';
import { useState } from 'react';
import ActiveTab from './active-tab/active-tab';
import TabNavigationItem from './tab-navigation-item/tab-navigation-item';

type FilmInfoTabsProps = {
  film: FilmInfo;
};

function FilmInfoTabs({film}:FilmInfoTabsProps):JSX.Element{
  const {name, posterImage} = film;
  const altPoster = `${name} poster`;
  const tabValues = Object.values(Tabs);

  const [currentTab, setCurrentTab] = useState(Tabs.Overview);
  return(
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={posterImage} alt={altPoster} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              {tabValues.map(
                (element)=><TabNavigationItem key={element} name={element} active={element === currentTab} onClick={()=>{ setCurrentTab(element);}}/>
              )}
            </ul>
          </nav>
          <ActiveTab film={film} tab={currentTab}/>
        </div>
      </div>
    </div>
  );
}

export default FilmInfoTabs;
