import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Music } from "../interfaces/music.model";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private apiUrl = environment.baseUrl;

  constructor(){
  }

  addMusic(music: Partial<Music>){
    // TODO: Implementar
  }

  getMusics(){
    // TODO: Implementar
  }

  setCurrentMusic(music: Music){
    // TODO: Implementar
  }

  getCurrentMusic(){
    // TODO: Implementar
  }

  getArtists(){
    // TODO: Implementar
  }

}