import { Component, Input } from '@angular/core';
import { FixturesResponse } from 'src/app/models/football-api/fixtures-response.model';

@Component({
  selector: 'app-team-fixture',
  templateUrl: './team-fixture.component.html',
  styleUrls: ['./team-fixture.component.scss']
})
export class TeamFixtureComponent {

  @Input() selectTeam: number = 0;
  @Input() fixtures: FixturesResponse[] = [];
  
}
