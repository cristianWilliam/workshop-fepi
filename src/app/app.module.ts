import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'my-musics'
  },
  {
    path: 'my-musics',
    loadChildren: () => import('./pages/my-musics/my-musics.module')
  },
  {
    path: 'add-musics',
    loadChildren: () => import('./pages/add-musics/add-musics.module')
  },
  {
    path: 'list-artists',
    loadChildren: () => import('./pages/list-artists/list-artists.module')
  }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SidePanelComponent,
    FooterComponent,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
