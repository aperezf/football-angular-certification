import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueSelectorComponent } from './components/league-selector/league-selector.component';
import { StandingComponent } from './components/standing/standing.component';
import { TeamFixtureComponent } from './components/team-fixture/team-fixture.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    LeagueSelectorComponent,
    StandingComponent,
    TeamFixtureComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeagueSelectorComponent,
    StandingComponent,
    TeamFixtureComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
