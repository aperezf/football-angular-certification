import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { FootballApiService } from 'src/app/services/football-api/football-api.service';
import { FixturesResponse } from 'src/app/shared/models/football-api.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  teamId: number = 0;
  fixtures: FixturesResponse[] = [];
  fromLeagueId: number = 0;

  // Services
  footballApiService: FootballApiService = inject(FootballApiService);
  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.queryParams.pipe().subscribe((queryParams: Params) => {
      const b: number = parseInt(queryParams['b']);
      if (isNaN(b)) return;
      this.fromLeagueId = b;
    });
    this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const team: number = parseInt(params['id']);
        if (isNaN(team)) return of(null);
        this.teamId = team;
         return this.footballApiService.getFixtureByTeamId(this.teamId)
      })
     ).subscribe(res => {
      if (!res) return;
      console.log(res);
      this.fixtures = res;
    });
  }

  onBack(): void {
    const params: NavigationExtras = {
      queryParams: { 'league': this.fromLeagueId  }
    }
    this.router.navigate(['/'], params);
  }
}
