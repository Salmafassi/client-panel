import { DetailsClientComponent } from './components/details-client/details-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AddClientComponent } from './components/add-client/add-client.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuardsGuard } from './guards/auth-guards.guard';

const routes: Routes = [
  {path:"",component:DashboardComponent,canActivate: [AuthGuardsGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"Client/add",component:AddClientComponent,canActivate: [AuthGuardsGuard]},
  {path:"client/edit/:id",component:EditClientComponent,canActivate: [AuthGuardsGuard]},
  {path:"client/:id",component:DetailsClientComponent,canActivate: [AuthGuardsGuard]},
  {path:"settings",component:SettingsComponent,canActivate: [AuthGuardsGuard]},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuardsGuard]
})
export class AppRoutingModule { }
