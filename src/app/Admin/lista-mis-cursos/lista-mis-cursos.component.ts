import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-lista-mis-cursos',
  templateUrl: './lista-mis-cursos.component.html',
  styleUrls: ['./lista-mis-cursos.component.css']
})
export class ListaMisCursosComponent implements OnInit {

  misCursos;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.misCursos=[];
    this.peticionSuscripciones();
  }

  peticionSuscripciones(){
    this.http.get('http://Apirest-env.eba-tctazmdb.us-east-2.elasticbeanstalk.com/v1/suscripciones').subscribe( ( respuesta ) => {
      this.misCursos = respuesta;
    });
  }
}
