import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyMusicsComponent } from "./my-musics.component";

const routes: Routes = [
  {
    path: '',
    component: MyMusicsComponent
  }
]

@NgModule({
  declarations: [
    MyMusicsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export default class MyMusicModule{}