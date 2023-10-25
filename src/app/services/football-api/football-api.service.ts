import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { League } from 'src/app/models/football-api/league.model';
import { FootballApiResponse } from 'src/app/models/football-api/football-api-response.model';
import { FixturesResponse } from 'src/app/models/football-api/fixtures-response.model';

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {

  currentSeason: number = new Date().getFullYear();

  // Services
  private http: HttpClient = inject(HttpClient);

  constructor(
    @Inject('FOOTBALL_API_BASE_URL') private baseUrl: string
  ) { }

  getStandingByLeagueId(leagueId: number): Observable<League> {
    const params = new HttpParams()
      .set('season', this.currentSeason)
      .set('league', leagueId);
    const url: string = `${this.baseUrl}/standings`;
    // const url: string = `assets/${leagueId}.json`
    return this.http.get<FootballApiResponse>(url, { params: params }).pipe(
      map((res: FootballApiResponse) => res.response[0]?.league)
    );
  }

  getFixtureByTeamId(teamId: number): Observable<FixturesResponse[]> {
    const params = new HttpParams()
      .set('season', this.currentSeason)
      .set('team', teamId)
      .set('last', 10);
    const url: string = `${this.baseUrl}/fixtures`;
    // const url: string = 'assets/team.json';
    return this.http.get<FootballApiResponse>(url, { params: params }).pipe(
      map((res: FootballApiResponse) => res.response as FixturesResponse[])
    );
  }
}
