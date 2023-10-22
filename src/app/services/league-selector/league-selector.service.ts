import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueSelector } from 'src/app/shared/league-selector/league-selector.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueSelectorService {

  private http = inject(HttpClient)

  constructor() { }

  getAllLeagues(): Observable<LeagueSelector[]> {
    return this.http.get<LeagueSelector[]>('assets/leagues.json');
  }
}
