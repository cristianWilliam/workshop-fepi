import { Music } from "../interfaces/music.model";
import { FakeArtists } from "./fake.artist";

export const FakeMusics: Music[] = [
  {
    id: 1,
    title: 'Wind Of Change',
    time: '5:31',
    artist: FakeArtists.find(x => x.name === 'Scorpions')!,
    album: 'MTV Unplugged'
  },
  {
    id: 2,
    title: 'The Final Countdown',
    time: '5:09',
    artist: FakeArtists.find(x => x.name === 'Europe')!,
    album: 'The Final Countdown',
  },
  {
    id: 3,
    title: 'Living On A Prayer',
    time: '4:10',
    artist: FakeArtists.find(x => x.name === 'Bon Jovi')!,
    album: 'Slippery When Wet',
  },
  {
    id: 4,
    title: 'I Want To Know What Love Is',
    time: '5:01',
    artist: FakeArtists.find(x => x.name === 'Foreigner')!,
    album: 'Agent Provocateur',
  },
  {
    id: 5,
    title: 'Eye Of The Tiger',
    time: '4:03',
    artist: FakeArtists.find(x => x.name === 'Survivor')!,
    album: 'Eye of the Tiger',
  },
  {
    id: 6,
    title: 'Carrie',
    time: '4:31',
    artist: FakeArtists.find(x => x.name === 'Europe')!,
    album: 'The Final Countdown',
  },
  {
    id: 7,
    title: 'Here I Go Again',
    time: '4:35',
    artist: FakeArtists.find(x => x.name === 'Whitesnake')!,
    album: 'Saints & Sinners',
  },
  {
    id: 8,
    title: 'Every Rose Has Its Thorn',
    time: '4:20',
    artist: FakeArtists.find(x => x.name === 'Poison')!,
    album: 'Open Up and Say... Ahh!',
  },
  {
    id: 9,
    title: 'Is This Love',
    time: '4:45',
    artist: FakeArtists.find(x => x.name === 'Whitesnake')!,
    album: 'Whitesnake',
  },
  {
    id: 10,
    title: 'Alone',
    time: '3:24',
    artist: FakeArtists.find(x => x.name === 'Heart')!,
    album: 'Bad Animals',
  },
  {
    id: 11,
    title: 'Don\'t Stop Believin\'',
    time: '4:11',
    artist: FakeArtists.find(x => x.name === 'Journey')!,
    album: 'Escape',
  },
  {
    id: 12,
    title: 'I\'ll Be There For You',
    time: '5:43',
    artist: FakeArtists.find(x => x.name === 'Bon Jovi')!,
    album: 'New Jersey',
  },
  {
    id: 13,
    title: 'High Enough',
    time: '4:20',
    artist: FakeArtists.find(x => x.name === 'Damn Yankees')!,
    album: 'Damn Yankees',
  },
  {
    id: 14,
    title: 'More Than Words',
    time: '5:34',
    artist: FakeArtists.find(x => x.name === 'Extreme')!,
    album: 'Pornograffitti',
  },
  {
    id: 15,
    title: 'I Remember You',
    time: '5:14',
    artist: FakeArtists.find(x => x.name === 'Skid Row')!,
    album: 'Skid Row',
  },
  {
    id: 16,
    title: 'Carry On Wayward Son',
    time: '5:23',
    artist: FakeArtists.find(x => x.name === 'Kansas')!,
    album: 'Leftoverture',
  }      
]