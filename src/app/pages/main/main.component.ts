import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { FootballApiService } from 'src/app/services/football-api/football-api.service';
import { LeagueSelectorService } from 'src/app/services/league-selector/league-selector.service';
import { LeagueSelector } from 'src/app/models/league-selector.model';
import { League } from 'src/app/models/football-api/league.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  leagues: LeagueSelector[] = [];
  selectedLeagueId: number = 0;
  selectedLeague: League | null = null;
  notifier$: Subject<void> = new Subject();
  isLoadingLeagues: boolean = true;
  isLoadingStanding: boolean = true;
  
  // Services
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private leagueSelectorService: LeagueSelectorService = inject(LeagueSelectorService);
  private footballApiService: FootballApiService = inject(FootballApiService);

  ngOnInit(): void {
    this.leagueSelectorService.getAllLeagues().pipe(
      switchMap((leagues: LeagueSelector[]) => {
        this.leagues = leagues;
        this.selectedLeagueId = leagues[0].id;
        this.isLoadingLeagues = false;
        return this.activatedRoute.queryParams.pipe(takeUntil(this.notifier$));
      }),
      switchMap((params: Params) => {
        this.isLoadingStanding = true;
        let league: number = parseInt(params['league']);
        if (isNaN(league)) league = this.leagues[0].id;
        this.selectedLeagueId = league
        return this.footballApiService.getStandingByLeagueId(league).pipe(takeUntil(this.notifier$));
      })
    ).subscribe((l: League) => {
      this.selectedLeague = l;
      this.isLoadingStanding = false;
    });
  }

  ngOnDestroy(): void {
    this.notifier$.next();
    this.notifier$.complete();
  }

  onSelectLeague(leagueSelected: LeagueSelector): void {
    this.selectedLeagueId = leagueSelected.id;
    const params: NavigationExtras = {
      queryParams: { 'league': leagueSelected.id}
    } 
    this.router.navigate(['/'], params);
  }

  onSelectTeam(teamId: number): void {
    const backLeagueId = this.selectedLeague !== null ? this.selectedLeague.id : this.leagues[0].id
    const params: NavigationExtras = {
      queryParams: { 'b': backLeagueId }
    }
    this.router.navigate(['/teams', teamId], params);
  }

}
