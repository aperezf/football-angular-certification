import { Fixture, HalftimeOrFulltimeOrGoals, Score, Teams } from "src/app/pages/team/team.model"
import { League } from "../components/standing/standing.model"

export interface FootballApiResponse {
  get: string
  parameters: Parameters
  errors: any[]
  results: number
  paging: Paging
  response: StandingsResponse[] | FixturesResponse[]
}

export interface Parameters {
  season: string
  league: string
}

export interface Paging {
  current: number
  total: number
}

export interface StandingsResponse {
  league: League
}

export interface FixturesResponse {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: HalftimeOrFulltimeOrGoals;
  score: Score;
}
