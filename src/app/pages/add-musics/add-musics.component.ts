import { Component, ViewChild } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";
import { Observable, map } from "rxjs";
import { Artist } from "src/app/interfaces/artist.model";
import { MusicService } from "src/app/services/music.service";

@Component({
  templateUrl: 'add-musics.component.html',
  styleUrls: ['add-musics.component.scss']
})
export class AddMusicsComponent {
  
  @ViewChild('form') protected formParent?: NgForm;
  protected artists$ = new Observable<Artist[]>();

  constructor(private musicService: MusicService){
    this.getArtists();
  }

  submit(){
    this.formParent?.form.markAllAsTouched();

    console.log(this.formParent?.value);

    if (this.formParent?.invalid)
      return;

    const formValues = this.formParent?.form.value;

    this.musicService.addMusic({ 
      title: formValues.nome, 
      album: formValues.album,
      artistId: formValues.artista, 
      time: formValues.duracao
    }).subscribe(console.log);

    // this.formParent?.reset();
  }

  isControlInvalid(control: NgModel){
    return control.control.touched && control.control.invalid;
  }
  
  getArtists(){
    this.artists$ = this.musicService.getArtists()
      .pipe(map(artists => artists.sort((a, b) => a.name > b.name ? 1 : -1)))
    ;
  }
  
}