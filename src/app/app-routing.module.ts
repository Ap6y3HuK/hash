import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashComponent } from 'app/hash/ui/hash/hash.component';

const routes: Routes = [
  {
    path: '',
    component: HashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
