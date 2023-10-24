import { Fixture } from "./fixture.model";
import { League } from "./league.model";
import { Scoreboard } from "./score-team.model";
import { Score } from "./score.model";
import { Teams } from "./teams.model";

export interface FixturesResponse {
  fixture: Fixture;
  league: League;
  teams: Teams;
  goals: Scoreboard;
  score: Score;
}
