import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Artist } from "src/app/interfaces/artist.model";
import { FakeArtists } from "src/app/services/fake.artist";

@Component({
  templateUrl: 'add-musics.component.html',
  styleUrls: ['add-musics.component.scss']
})
export class AddMusicsComponent {
  
  @ViewChild('form') protected formParent?: NgForm;
  protected artists: Artist[] = [];

  constructor(){
    this.getArtists();
  }

  submit(){
    console.log('FEPIII', this.formParent);
  }
  
  getArtists(){
    this.artists = FakeArtists;
  }
  
}