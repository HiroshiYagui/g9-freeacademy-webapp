import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lista-de-videos',
  templateUrl: './lista-de-videos.component.html',
  styleUrls: ['./lista-de-videos.component.css']
})
export class ListaDeVideosComponent implements OnInit {

  videos;
  rutaServer;

  constructor( private http: HttpClient) {
    this.rutaServer = 'https://d1tp4siymq89d.cloudfront.net/image/';
  }

  ngOnInit(): void {
    this.videos = [];
    this.peticionExterna();
  }


  peticionExterna(){
    this.http.get('http://Apirest-env.eba-tctazmdb.us-east-2.elasticbeanstalk.com/v1/materials').subscribe( ( respuesta ) => {
      this.videos = respuesta;
    });
  }

}
