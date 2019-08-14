import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AppSettings} from "./shared/app-settings";
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ToastrModule} from "ngx-toastr";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    NgxDatatableModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],
  providers: [AppSettings],
  entryComponents: [ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
