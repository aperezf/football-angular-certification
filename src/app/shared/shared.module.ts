import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueSelectorComponent } from './components/league-selector/league-selector.component';
import { StandingComponent } from './components/standing/standing.component';



@NgModule({
  declarations: [
    LeagueSelectorComponent,
    StandingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeagueSelectorComponent,
    StandingComponent
  ]
})
export class SharedModule { }
