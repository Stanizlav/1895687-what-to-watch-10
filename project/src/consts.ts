export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Films = '/films/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Other = '*'
}

export enum Tabs {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews'
}

export enum Genre {
  Drama = 'Drama',
  Comedy = 'Comedy',
  Thriller = 'Thriller'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  Unauth = 'UNAUTH',
  Unknown = 'UNKNOWN'
}

const DEFAULT_FILMS_COUNT = 20;

export{ DEFAULT_FILMS_COUNT };
