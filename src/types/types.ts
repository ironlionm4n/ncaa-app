export type Quote = {
  text: string;
  author: string;
};

export type Team = {
  TeamID: number;
  Key: string;
  Active: boolean;
  School: string;
  Name: string;
  StadiumID: number;
  ApRank: number;
  Wins: number;
  Losses: number;
  ConferenceWins: number;
  ConferenceLosses: number;
  GlobalTeamID: number;
  CoachesRank: number;
  PlayoffRank: number;
  TeamLogoUrl: string;
  ConferenceID: number;
  Conference: string;
  ShortDisplayName: string;
  RankWeek: number;
  RankSeason: number;
  RankSeasonType: number;
};

export type Conference = {
  ConferenceID: number;
  Name: string;
  Teams: Team[];
  ConferenceName: string;
  DivisionName: string;
};

export type StoreState = {
  allData: Conference[];
  quotes: Quote[];
};

export type Actions = {
  setAllData: (data: Conference[]) => void;
  setQuotes: (data: Quote[]) => void;
  getRandomQuote: () => Quote;
};
