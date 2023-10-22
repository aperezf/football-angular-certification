import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueSelectorComponent } from './league-selector/league-selector.component';
import { StandingComponent } from './standing/standing.component';



@NgModule({
  declarations: [
    LeagueSelectorComponent,
    StandingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
