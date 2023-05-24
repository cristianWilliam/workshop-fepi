import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AddMusicsComponent } from "./add-musics.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: AddMusicsComponent
  }
]

@NgModule({
  declarations: [
    AddMusicsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class AddMusicsModule {

}