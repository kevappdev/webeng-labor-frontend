import { Component } from '@angular/core';
import {createSong, readArtist, readSongs} from "../../../client";
import {async} from "rxjs";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {


  public query:string = "";

  public currentSong: Song | undefined;
  public allSongs: Array<Song> = [];
  private mockSongs = [
    new Song("1","Melodie", "CRO", ""),
    new Song("2","Traum", "CRO", ""),
    new Song("3","Roller", "Apache", ""),
    new Song("10", "Keine Liebe", "Trettmann", ""),
    new Song("11", "Chardonnay", "Majan", ""),
    new Song("12", "High", "Ufo361", ""),
    new Song("13", "110", "Capital Bra", ""),
    new Song("14", "Emotions", "Nimo", ""),
    new Song("15", "Kein Schlaf", "Loredana", ""),
    new Song("16", "Sowieso", "Mark Forster", ""),
    new Song("17", "Palmen aus Plastik", "Bonez MC", ""),
    new Song("18", "Sturmmaske auf", "Gzuz", ""),
    new Song("19", "Nur noch Gucci", "Shindy", ""),
    new Song("20", "Was du Liebe nennst", "BAUSA", ""),
    new Song("21", "Vincent", "Sarah Connor", ""),
    new Song("22", "1000 Tattoos", "Sido", ""),
    new Song("23", "Auf uns", "Andreas Bourani", ""),
    new Song("24", "Je ne parle pas français", "Namika", ""),
    new Song("25", "Bist du Down", "Ace Tee", "")
  ];
  public shownSongs: Array<Song> = this.allSongs;

  ngOnInit() {
    this.currentSong = new Song("2","Whatever", "CRO", "");


    readSongs().then(async songs => {
      for (let song of songs?.data ?? []) {

        let artistName = "";

        await readArtist({
          path: {
            id: song.artists[0] ?? "null"
          }
        }).then(artist => {
          artistName = artist.data?.name ?? "-";
          console.log(artistName);
        });

        this.allSongs.push(new Song(song.id ?? "null", song.title, artistName, ""))
      }
    })
  }

  selectNewSong(song:Song) {
    this.currentSong = song;
  }

  setNewQuery() {
    this.shownSongs = this.allSongs.filter(song => song.name.toLowerCase().includes(this.query.toLowerCase()) || song.artist.toLowerCase().includes(this.query.toLowerCase()));
    console.log(this.shownSongs);
  }

  protected readonly isSecureContext = isSecureContext;
}

class Song {

  id:string;
  name:string;
  artist:string;
  image:string;

  constructor(id:string, name:string, artist:string, image:string) {
    this.id = id;
    this.name = name;
    this.artist = artist;
    this.image = image;
  }

}
