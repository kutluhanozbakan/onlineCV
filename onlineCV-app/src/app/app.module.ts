import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


//JSON İÇİN EKLENTİ
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TruncatePipePipe } from './container/truncate-pipe.pipe';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EgitimFilterPipe } from './container/egitim-filter.pipe';
import { HakkimdaComponent } from './container/hakkimda/hakkimda.component';
import { EgitimAdd1Component } from './container/egitim-add1/egitim-add1.component';
import { EgitimAdd2Component } from './container/egitim-add2/egitim-add2.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TruncatePipePipe,
    SidebarComponent,
    EgitimFilterPipe,
    HakkimdaComponent,
    EgitimAdd1Component,
    EgitimAdd2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
