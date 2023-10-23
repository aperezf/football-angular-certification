import { Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { League } from './standing.model';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss']
})
export class StandingComponent {

  @Input() league: League | null = null;
  @Output() selectTeam: EventEmitter<number> = new EventEmitter();

  onSelectTeam(teamId: number) {
    this.selectTeam.emit(teamId);
  }

}
