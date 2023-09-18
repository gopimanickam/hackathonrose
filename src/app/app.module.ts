import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TeststartComponent } from './teststart/teststart.component';
import { ToastModule } from 'primeng/toast'; 
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginserviceService } from './loginservice.service';
import { MenubarModule } from 'primeng/menubar';
import { QuestionsService } from './questions.service';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PsychometricTestComponent } from './psychometric-test/psychometric-test.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TeststartComponent,
    PsychometricTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ToastModule,
    RouterModule,
    HttpClientModule,
    MenubarModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
  ],
  providers: [LoginserviceService,QuestionsService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export { Routes };


