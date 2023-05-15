import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscriber, Subscription, map } from "rxjs";
import { Music } from "src/app/interfaces/music.model";
import { MusicService } from "src/app/services/music.service";

@Component({
  templateUrl: 'my-musics.component.html',
  styleUrls: ['my-musics.component.scss']
})
export class MyMusicsComponent implements OnInit, OnDestroy{

  currentMusic?: Music
  unsubOnDestroy = new Subscription();

  musics$ = new Observable<Music[]>();

  constructor(private musicService: MusicService){
  }

  ngOnInit(): void {
    this.getMusics();
    this.getCurrentMusic();
  }

  ngOnDestroy(): void {
    this.unsubOnDestroy.unsubscribe();
  }

  getMusics(){
    this.musics$ = this.musicService.getAll();
  }

  getCurrentMusic(){
    const sub = this.musicService.currentMusic$.subscribe(x => this.currentMusic = x);
    this.unsubOnDestroy.add(sub);
  }

  playMusic(music: Music){
    this.musicService.currentMusic$.next(music);
  }

}