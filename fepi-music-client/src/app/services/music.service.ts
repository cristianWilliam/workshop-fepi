import { Injectable } from "@angular/core";
import { Music } from "../interfaces/music.model";
import { BehaviorSubject, Subject, last, map, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  currentMusic$ = new Subject<Music>();
  musics = this.getInitialMusics();

  getAll(){
    return of(this.musics)
      .pipe(map(x => <Music[]>x));
  }

  addMusic(music: Partial<Music>){
    let currentId = this.musics.at(-1)?.id || 0;

    if (currentId)
      currentId += 1;

    music.id = currentId;
    this.musics.push(<Music> music);
    localStorage.setItem('MUSICS', JSON.stringify(this.musics));
  }

  getInitialMusics(){
    const musics = localStorage.getItem('MUSICS');

    if (!musics)
      return this.getMockedMusic();

    return <Music[]>JSON.parse(musics);
  }

  private getMockedMusic(): Music[]{
    return [
      {
        id: 1,
        title: 'Wind Of Change',
        time: '5:31',
        artist: 'Scorpions',
        album: 'MTV Unplugged'
      },
      {
        id: 2,
        title: 'The Final Countdown',
        time: '5:09',
        artist: 'Europe',
        album: 'The Final Countdown',
      },
      {
        id: 3,
        title: 'Living On A Prayer',
        time: '4:10',
        artist: 'Bon Jovi',
        album: 'Slippery When Wet',
      },
      {
        id: 4,
        title: 'I Want To Know What Love Is',
        time: '5:01',
        artist: 'Foreigner',
        album: 'Agent Provocateur',
      },
      {
        id: 5,
        title: 'Eye Of The Tiger',
        time: '4:03',
        artist: 'Survivor',
        album: 'Eye of the Tiger',
      },
      {
        id: 6,
        title: 'Carrie',
        time: '4:31',
        artist: 'Europe',
        album: 'The Final Countdown',
      },
      {
        id: 7,
        title: 'Here I Go Again',
        time: '4:35',
        artist: 'Whitesnake',
        album: 'Saints & Sinners',
      },
      {
        id: 8,
        title: 'Every Rose Has Its Thorn',
        time: '4:20',
        artist: 'Poison',
        album: 'Open Up and Say... Ahh!',
      },
      {
        id: 9,
        title: 'Is This Love',
        time: '4:45',
        artist: 'Whitesnake',
        album: 'Whitesnake',
      },
      {
        id: 10,
        title: 'Alone',
        time: '3:24',
        artist: 'Heart',
        album: 'Bad Animals',
      },
      {
        id: 11,
        title: 'Don\'t Stop Believin\'',
        time: '4:11',
        artist: 'Journey',
        album: 'Escape',
      },
      {
        id: 12,
        title: 'I\'ll Be There For You',
        time: '5:43',
        artist: 'Bon Jovi',
        album: 'New Jersey',
      },
      {
        id: 13,
        title: 'High Enough',
        time: '4:20',
        artist: 'Damn Yankees',
        album: 'Damn Yankees',
      },
      {
        id: 14,
        title: 'More Than Words',
        time: '5:34',
        artist: 'Extreme',
        album: 'Pornograffitti',
      },
      {
        id: 15,
        title: 'I Remember You',
        time: '5:14',
        artist: 'Skid Row',
        album: 'Skid Row',
      },
      {
        id: 16,
        title: 'Carry On Wayward Son',
        time: '5:23',
        artist: 'Kansas',
        album: 'Leftoverture',
      }      
    ]
  }

}