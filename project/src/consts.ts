export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Other = '*'
}

export enum Genre {
  Drama = 'Drama',
  Comedy = 'Comedy'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  Unauth = 'UNAUTH',
  Unknown = 'UNKNOWN'
}

const DEFAULT_FILMS_COUNT = 20;

export{ DEFAULT_FILMS_COUNT };
