import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashContentComponent } from 'app/hash/ui/hash-content/hash-content.component';

const routes: Routes = [
  {
    path: '',
    component: HashContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
