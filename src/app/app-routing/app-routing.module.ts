import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { MemecreatorComponent } from '../memecreator/memecreator.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'memecreator',component:MemecreatorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
