import { Statistics } from "./statistics.model"
import { Team } from "./team.model"

export interface Standing {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description?: string;
  all: Statistics;
  home: Statistics;
  away: Statistics;
  update: string;
}