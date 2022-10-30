import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { SureGuard } from './guards/sure.guard';
import { AllbooksComponent } from './pages/books/allbooks/allbooks.component';
import { SinglebookComponent } from './pages/books/singlebook/singlebook.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  {path:"",component:AllbooksComponent,canDeactivate:[SureGuard]},
  {path:"single/:id",component:SinglebookComponent},
  {path:"register",component:RegisterComponent},
  {path:"login", component:LoginComponent, canActivate:[IsLoggedGuard]}
   // {path:"**",component:Err404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
