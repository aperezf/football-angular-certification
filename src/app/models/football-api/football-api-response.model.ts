import { Paging } from "./paging.model"
import { StandingsResponse } from "./standings-response.model"
import { FixturesResponse } from "./fixtures-response.model"

export interface FootballApiResponse {
  get: string;
  parameters: { [key: string]: string };
  errors: { [key: string]: string };
  results: number;
  paging: Paging;
  response: StandingsResponse[] | FixturesResponse[];
}