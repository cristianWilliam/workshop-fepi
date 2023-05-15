import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
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
export class FooterComponent implements OnInit, OnDestroy{
  
  protected music?: Music;
  private subs = new Subscription();

constructor(private musicService: MusicService){}
  
  ngOnInit(): void {
    this.getCurrentMusic();  
  }

  getCurrentMusic(){
    const sub = this.musicService.currentMusic$
      .subscribe(x => this.music = x);

    this.subs.add(sub);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }




}