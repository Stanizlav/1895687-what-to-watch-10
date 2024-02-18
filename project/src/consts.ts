export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Other = '*'
}

export enum Tabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum AuthorisationStatus {
  Auth = 'AUTH',
  Unauth = 'UNAUTH',
  Unknown = 'UNKNOWN'
}

export const DEFAULT_FILMS_COUNT = 8;
export const REDIRECT_ACTION_TYPE = 'Application/redirection';
export const ALL_GENRES = 'All Genres';
