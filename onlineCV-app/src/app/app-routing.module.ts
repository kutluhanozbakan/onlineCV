import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { EgitimAdd1Component } from './container/egitim-add1/egitim-add1.component';
import { EgitimAdd2Component } from './container/egitim-add2/egitim-add2.component';


const routes: Routes = [
  {path: 'anasayfa', component: ContainerComponent},
  {path: 'egitim-add-one',component: EgitimAdd1Component},
  {path: 'egitim-add-two',component: EgitimAdd2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

