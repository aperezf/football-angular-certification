export interface Fixture {
  id: number;
  referee: string;
  timezone: string;
  date: string;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}
export interface Periods {
  first: number;
  second: number;
}
export interface Venue {
  id: number;
  name: string;
  city: string;
}
export interface Status {
  long: string;
  short: string;
  elapsed: number;
}
export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag?: string | null;
  season: number;
  round: string;
}
export interface Teams {
  home: HomeOrAway;
  away: HomeOrAway;
}
export interface HomeOrAway {
  id: number;
  name: string;
  logo: string;
  winner?: boolean | null;
}
export interface HalftimeOrFulltimeOrGoals {
  home: number;
  away: number;
}
export interface Score {
  halftime: HalftimeOrFulltimeOrGoals;
  fulltime: HalftimeOrFulltimeOrGoals;
  extratime: ExtratimeOrPenalty;
  penalty: ExtratimeOrPenalty;
}
export interface ExtratimeOrPenalty {
  home?: null;
  away?: null;
}
