import { Component } from '@angular/core';
import {createClient} from "@hey-api/client-fetch";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-catalog';

  ngOnInit() {
    createClient({
      baseUrl: 'http://localhost:8080'
    })
  }

}
