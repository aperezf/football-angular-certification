import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LeagueSelector } from '../../../models/league-selector.model';

@Component({
  selector: 'app-league-selector',
  templateUrl: './league-selector.component.html',
  styleUrls: ['./league-selector.component.scss']
})
export class LeagueSelectorComponent {

  @Input() leagues: LeagueSelector[] = [];
  @Input() selectedLeagueId: number = 0;
  @Output() selectLeague: EventEmitter<LeagueSelector> = new EventEmitter();

  onSelectLeague(league: LeagueSelector): void {
    this.selectLeague.emit(league);
  }

}
