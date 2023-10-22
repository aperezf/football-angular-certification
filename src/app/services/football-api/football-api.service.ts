import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FootballApiResponse, League, Standing } from 'src/app/shared/standing/standing.model';

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
}
