import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { League, Standing } from 'src/app/shared/components/standing/standing.model';
import { FixturesResponse, FootballApiResponse } from 'src/app/shared/models/football-api.model';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {

  http = inject(HttpClient);

  constructor() { }

  getStandingByLeagueId(leagueId: number): Observable<League> {
    return this.http.get<FootballApiResponse>(`assets/${leagueId}.json`).pipe(
      map((res: FootballApiResponse) => res.response[0]?.league),
      map((l: League) => {
        l.standings[0] = l.standings[0].sort((a: Standing, b: Standing) => a.rank - b.rank);
        return l;
      })
    );
  }

  getFixtureByTeamId(teamId: number): Observable<FixturesResponse[]> {
    return this.http.get<FootballApiResponse>('assets/team.json').pipe(
      map((res: FootballApiResponse) => res.response as FixturesResponse[])
    );
  }
}
