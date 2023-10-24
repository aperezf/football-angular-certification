import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { FootballApiService } from '../../services/football-api/football-api.service';
import { FixturesResponse } from 'src/app/models/football-api/fixtures-response.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  fromLeagueId: number = 0;
  isLoading: boolean = true;
  fixtures: FixturesResponse[] = []
  teamId: number = 0;

  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  footballApiService:FootballApiService = inject(FootballApiService);
  
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
      this.isLoading = false;
      if (!res) return;
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
