import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { LeagueSelectorService } from 'src/app/services/league-selector/league-selector.service';
import { LeagueSelector } from 'src/app/shared/league-selector/league-selector.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  leagues: LeagueSelector[] = [];
  selectedLeagueId: number = 0;
  notifier$: Subject<void> = new Subject();

  // Services
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private leagueSelectorService: LeagueSelectorService = inject(LeagueSelectorService);

  ngOnInit(): void {
    this.leagueSelectorService.getAllLeagues().pipe(
      switchMap((leagues: LeagueSelector[]) => {
        this.leagues = leagues;
        this.selectedLeagueId = leagues[0].id;
        return this.activatedRoute.queryParams.pipe(takeUntil(this.notifier$));
      })
    ).subscribe((params: Params) => {
      const league: number = parseInt(params['league']);
      if (isNaN(league)) return;
      this.selectedLeagueId = league;
    });
  }

  ngOnDestroy(): void {
    this.notifier$.next();
    this.notifier$.complete();
  }

  onSelectLeague(leagueSelected: LeagueSelector): void {
    this.selectedLeagueId = leagueSelected.id;
    const params: NavigationExtras = {
      queryParams: { 'league': leagueSelected.id }
    } 
    this.router.navigate(['/'], params);
  }

}
