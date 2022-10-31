import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AllbooksComponent } from './pages/books/allbooks/allbooks.component';
import { SinglebookComponent } from './pages/books/singlebook/singlebook.component';
import { AuthInterceptor } from './auth.interceptor';
import { CategoryComponent } from './pages/books/category/category.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent,
    FooterComponent,
    AllbooksComponent,
    SinglebookComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
