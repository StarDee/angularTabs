import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouteReuseStrategy} from '@angular/router';
import {SimpleReuseStrategy} from './SimpleReuseStrategy';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TabsComponent } from './tabs/tabs.component';
import {DealWithTabService} from './deal-with-tab.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    AboutComponent,
    ContactComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: SimpleReuseStrategy },DealWithTabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
