import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgHttpCachingConfig, NgHttpCachingModule, NgHttpCachingStrategy } from 'ng-http-caching';
import { environment } from 'src/environments/environment';
import { FootballApiKeyInterceptor } from './services/football-api/football-api-key-interceptor.service';
import { MainComponent } from './pages/main/main.component';
import { TeamComponent } from './pages/team/team.component';

const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 1000 * 60 * 60, // cache expire after 60 minutes
  allowedMethod: ['GET', 'HEAD'],
  cacheStrategy: NgHttpCachingStrategy.ALLOW_ALL,
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FootballApiKeyInterceptor, multi: true },
    { provide: 'FOOTBALL_API_BASE_URL' , useValue: environment.footballApi.baseUrl },
    { provide: 'FOOTBALL_API_KEY', useValue: environment.footballApi.apiKey }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
