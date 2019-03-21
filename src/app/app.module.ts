import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ViewComponent } from './components/view/view.component';
import { SortByNumberPipe } from './pipes/sort-by-number.pipe';
import { TimePipePipe } from './pipes/time-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    SortByNumberPipe,
    TimePipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
