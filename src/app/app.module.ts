import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgHttpCachingConfig, NgHttpCachingModule, NgHttpCachingStrategy } from 'ng-http-caching';
import { environment } from 'src/environments/environment';
import { FootballApiKeyInterceptor } from './services/football-api/football-api-key-interceptor.service';

const ngHttpCachingConfig: NgHttpCachingConfig = {
  lifetime: 1000 * 60 * 60 * 24, // cache expire after 10 seconds
  allowedMethod: ['GET', 'HEAD'],
  cacheStrategy: NgHttpCachingStrategy.ALLOW_ALL,
};

@NgModule({
  declarations: [
    AppComponent
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
