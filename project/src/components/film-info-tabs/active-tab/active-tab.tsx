import { Tabs } from '../../../consts';
import FilmInfo from '../../../types/film-info';
import DetailsTab from '../details-tab/details-tab';
import OverviewTab from '../overview-tab/overview-tab';
import ReviewsTab from '../reviews-tab/reviews-tab';

type ActiveTabProps = {
  film: FilmInfo;
  tab:Tabs
};

function ActiveTab({film, tab}:ActiveTabProps):JSX.Element | null{
  switch(tab){
    case Tabs.Overview:
      return <OverviewTab film={film}/>;
    case Tabs.Details:
      return <DetailsTab film={film}/>;
    case Tabs.Reviews:
      return <ReviewsTab film={film}/>;

    default:
      return null;
  }
}

export default ActiveTab;
