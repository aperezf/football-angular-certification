import { Paging } from "./paging.model"
import { Parameters } from "./parameters.model"
import { StandingsResponse } from "./standings-response.model"
import { FixturesResponse } from "./fixtures-response.model"

export interface FootballApiResponse {
  get: string
  parameters: Parameters
  errors: any[]
  results: number
  paging: Paging
  response: StandingsResponse[] | FixturesResponse[]
}