import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LeagueSelector } from 'src/app/models/league-selector.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueSelectorService {

  // Services
  private http: HttpClient = inject(HttpClient)

  constructor() { }

  getAllLeagues(): Observable<LeagueSelector[]> {
    return this.http.get<LeagueSelector[]>('assets/leagues.json');
  }
}
