import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KarbantartasComponent } from './karbantartas/karbantartas.component';

const routes: Routes = [
  {path:"", component:KarbantartasComponent},
  // {path:"/home", component:KarbantartasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
