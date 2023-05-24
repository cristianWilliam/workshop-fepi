import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListArtistsComponent } from "./list-artists.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: ListArtistsComponent
  }
]


@NgModule({
  declarations: [
    ListArtistsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export default class ListArtistsModule{

}