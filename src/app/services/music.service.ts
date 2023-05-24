import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { Artist } from "../interfaces/artist.model";
import { Music } from "../interfaces/music.model";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  currentMusic$ = new Subject<Music>();
  private apiUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient){
  }

  addMusic(music: Partial<Music>){
    return this.httpClient.post<Music>(`${this.apiUrl}music`, music);
  }

  getMusics(){
    return this.httpClient.get<Music[]>(`${this.apiUrl}music`);
  }

  setCurrentMusic(music: Music){
    this.currentMusic$.next(music);
  }

  getCurrentMusic(){
    return this.currentMusic$.asObservable();
  }

  getArtists( ){
    return this.httpClient.get<Artist[]>(`${this.apiUrl}artist`);
  }

}