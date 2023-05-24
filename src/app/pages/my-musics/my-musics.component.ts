import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscriber, Subscription, map } from "rxjs";
import { Music } from "src/app/interfaces/music.model";
import { MusicService } from "src/app/services/music.service";

@Component({
  templateUrl: 'my-musics.component.html',
  styleUrls: ['my-musics.component.scss']
})
export class MyMusicsComponent implements OnInit{

  currentMusicId$ = new Observable<number>();
  musics$ = new Observable<Music[]>();
  
  constructor(private musicService: MusicService){
  }

  ngOnInit(): void {
    this.getMusics();
    this.getCurrentMusic();
  }

  getMusics(){
    this.musics$ = this.musicService.getMusics();
  }

  getCurrentMusic(){
    this.currentMusicId$ = this.musicService.getCurrentMusic()
      .pipe(map(x => x.id));
  }

  playMusic(music: Music){
    this.musicService.setCurrentMusic(music);
  }

}