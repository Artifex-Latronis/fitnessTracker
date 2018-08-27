import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGaurd } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRoutingModule { }
