import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription, lastValueFrom } from "rxjs";
import { Music } from "src/app/interfaces/music.model";
import { MusicService } from "src/app/services/music.service";

@Component({
  selector: 'fm-footer',
  standalone: true,
  imports: [ CommonModule ],
  styleUrls: ['footer.component.scss'],
  template: `
      <span> {{ music?.title || '😕' }}</span>
      <span class="material-icons-outlined"> play_circle </span>
      <span class="album"> {{ music?.album || '😿' }} </span>
  `
})
export class FooterComponent {
  
  protected music?: Music;
  
constructor(){}
  
  ngOnInit(): void {
    this.getCurrentMusic();  
  }

  getCurrentMusic(){
  }

}