import { Component, OnInit } from "@angular/core";
import { Music } from "src/app/interfaces/music.model";
import { FakeMusics } from "src/app/services/fake.music";

@Component({
  templateUrl: 'my-musics.component.html',
  styleUrls: ['my-musics.component.scss']
})
export class MyMusicsComponent implements OnInit{

  currentMusicId: number = 0;
  musics: Music[] = [];
  
  constructor(){
  }

  ngOnInit(): void {
    this.getMusics();
    this.getCurrentMusic();
  }

  getMusics(){
    this.musics = FakeMusics;
  }

  getCurrentMusic(){
    this.currentMusicId = 0;
  }

  playMusic(music: Music){
    this.currentMusicId = music.id
  }

}