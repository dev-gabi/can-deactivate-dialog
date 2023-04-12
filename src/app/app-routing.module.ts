import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanFormDeactivateGuard } from './can-form-deactivate.guard';
import { EditFormComponent } from './edit-form/edit-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit', component: EditFormComponent, canDeactivate: [CanFormDeactivateGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
