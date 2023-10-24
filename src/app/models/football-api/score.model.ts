import { Scoreboard } from "./score-team.model";

export interface Score {
  halftime: Scoreboard;
  fulltime: Scoreboard;
  extratime: Scoreboard;
  penalty: Scoreboard;
}