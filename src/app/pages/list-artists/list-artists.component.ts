import { Component, OnInit } from "@angular/core";
import { Artist } from "src/app/interfaces/artist.model";
import { FakeArtists } from "src/app/services/fake.artist";

@Component({
  templateUrl: 'list-artists.component.html',
  styleUrls: ['list-artists.component.scss']
})
export class ListArtistsComponent implements OnInit {
  
  artists: Artist[] = [];

  constructor(){}

  ngOnInit(): void {
    this.artists = FakeArtists;
  }
}