import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuoteService } from './quote/quote.service';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    HeaderComponent,

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
