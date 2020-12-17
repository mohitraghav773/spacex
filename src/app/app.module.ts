import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { CardComponent } from './home/card.component';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'Space-X' }),
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    CardComponent,
    FilterComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  static isBrowser = new BehaviorSubject<boolean>(null);
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
