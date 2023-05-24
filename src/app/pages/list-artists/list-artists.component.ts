import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Artist } from "src/app/interfaces/artist.model";
import { MusicService } from "src/app/services/music.service";

@Component({
  templateUrl: 'list-artists.component.html',
  styleUrls: ['list-artists.component.scss']
})
export class ListArtistsComponent implements OnInit {
  
  artists$ = new Observable<Artist[]>();

  constructor(private musicService: MusicService){}

  ngOnInit(): void {
    this.artists$ = this.musicService.getArtists();
  }
}