export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Films = '/films/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Play = '/player/',
  Other = '*'
}

export enum Tabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  Unauth = 'UNAUTH',
  Unknown = 'UNKNOWN'
}

export const DEFAULT_FILMS_COUNT = 20;

export const ALL_GENRES = 'All Genres';
