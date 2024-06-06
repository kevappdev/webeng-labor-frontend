import { Component } from '@angular/core';
import * as api from "../../../client";

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent {

  public imgUrl:string | undefined;
  public songUrl:string | undefined;
  public fileName:string | undefined;

  public songName:string = "";

  public artists:Array<Artist> = [];
  public selectedArtist = "";


  selectNewImage(event:any) {
    let object = event.target.files[0];

    let url: string = URL.createObjectURL(object);

    this.imgUrl = url;
  }

  selectNewSong(event:any) {
    let object = event.target.files[0];
    let filename = object.name;

    console.log(filename);

    let url: string = URL.createObjectURL(object);

    this.songUrl = url;
    this.fileName = filename;
    this.songName = filename;
  }

  ngOnInit() {
    api.readArtists().then(artists => {
      for (let artist of artists?.data ?? []) {
        this.artists.push(new Artist(artist.name, artist.id ?? "null"))
      }
    })
  }


  async pushSong() {

    var e = <HTMLSelectElement>document.getElementById("artists")!;
    var value = e.value;

    api.createSong({
      body: {
        title: this.songName,
        artists: [value],
        producer: "",
        genres: [],
        release_date: new Date().toISOString(),
        duration: 120,
        albums: []
      }
    }).then(song => {
      let id = song.data?.id ?? "";
      window.open("http://localhost:4200", "_self");
    });

  }

}


class Artist {
  public name;
  public id;

  constructor(name:string, id:string) {
    this.name = name;
    this.id = id;
  }


}
