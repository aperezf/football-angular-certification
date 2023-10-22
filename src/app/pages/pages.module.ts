import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    MainComponent,
    TeamComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
