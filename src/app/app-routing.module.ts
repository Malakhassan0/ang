import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { SureGuard } from './guards/sure.guard';
import { AllbooksComponent } from './pages/books/allbooks/allbooks.component';
import { CategoryComponent } from './pages/books/category/category.component';
import { SinglebookComponent } from './pages/books/singlebook/singlebook.component';
import { Err404Component } from './pages/err404/err404.component';
import { EditProfileComponent } from './pages/user/edit-profile/edit-profile.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  { path: '', component: AllbooksComponent, canDeactivate: [SureGuard] },
  { path: 'single/:id', component: SinglebookComponent },
  { path: 'me', component: ProfileComponent },
  { path: 'edit', component: EditProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent, canActivate: [IsLoggedGuard] },
  { path: '**', component: Err404Component },
  // {path:"category/:cat",component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
