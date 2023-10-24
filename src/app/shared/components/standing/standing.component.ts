import { Component, EventEmitter, Input, Output } from '@angular/core';
import { League } from 'src/app/models/football-api/league.model';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss']
})
export class StandingComponent {

  @Input() league: League | null = null;
  @Output() selectTeam: EventEmitter<number> = new EventEmitter();

  onSelectTeam(teamId: number): void {
    this.selectTeam.emit(teamId);
  }

}
