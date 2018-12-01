import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ShowTweetsComponent } from './showTweets.component';
import { Service, ExampleInterceptor } from './service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShowTweetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'tweets/:keyword',
        component: ShowTweetsComponent
      }
    ])
  ],
  providers: [ Service,
    { provide: HTTP_INTERCEPTORS, useClass: ExampleInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
