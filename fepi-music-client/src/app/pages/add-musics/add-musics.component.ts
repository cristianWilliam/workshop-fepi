import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MusicService } from "src/app/services/music.service";

@Component({
  templateUrl: 'add-musics.component.html',
  styleUrls: ['add-musics.component.scss']
})
export class AddMusicsComponent {
  
  @ViewChild('form')formParent?: NgForm;
  @ViewChild('nome', { read: ElementRef }) nomeControl?: ElementRef;

  constructor(private musicService: MusicService){
  }

  submit(){
    this.formParent?.form.markAllAsTouched();

    if (this.formParent?.invalid)
      return;

    const formValues = this.formParent?.form.value;

    this.musicService.addMusic({ 
      title: formValues.nome, 
      album: formValues.album, 
      artist: formValues.artista, 
      time: formValues.duracao 
    });

    this.formParent?.reset();
    this.nomeControl?.nativeElement.focus();
  }
  
}