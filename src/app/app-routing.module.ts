import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tasks',
    loadComponent: () => loadRemoteModule('taskapp', './TaskListComponent').then((m) => m.TaskListComponent),

  },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
