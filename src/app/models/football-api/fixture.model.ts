import { Periods } from "./periods.model";
import { Status } from "./status.model";
import { Venue } from "./venue.model";

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