import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TeststartComponent } from './teststart/teststart.component';
import { ToastModule } from 'primeng/toast'; 
import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TeststartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ToastModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export { Routes };


