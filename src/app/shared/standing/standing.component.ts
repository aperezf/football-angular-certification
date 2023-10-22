import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { League, Team } from './standing.model';
import { Subject, takeUntil } from 'rxjs';
import { LeagueSelectorService } from 'src/app/services/league-selector/league-selector.service';
import { FootballApiService } from 'src/app/services/football-api/football-api.service';
import { LeagueSelector } from '../league-selector/league-selector.model';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss']
})
export class StandingComponent {

  @Input() leagueId: number = 0;
  league: League | null = null;
  @Output() selectTeam: EventEmitter<number> = new EventEmitter();
  notifier$: Subject<void> = new Subject();

  // Services
  leagueSelectorService = inject(LeagueSelectorService);
  footballApiService = inject(FootballApiService);

  ngOnChanges(changes: SimpleChanges): void {
    this.footballApiService.getStandingByLeagueId(this.leagueId).pipe(
      takeUntil(this.notifier$)
    ).subscribe({
      next: (res: League) => this.league = res,
      error: (err) => console.error(err)
    });
  }

  ngOnDestroy(): void {
    this.notifier$.next();
    this.notifier$.complete();
  }

  onSelectTeam(teamId: number) {
    console.log('onclick1')
    this.selectTeam.emit(teamId);
  }

}
