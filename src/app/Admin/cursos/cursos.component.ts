import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos;

  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.cursos=[];
    this.getCursos();
  }

  getCursos(){
    this.http.get("http://Apirest-env.eba-tctazmdb.us-east-2.elasticbeanstalk.com/v1/curso").subscribe( (response) => {
      this.cursos=response;
    });
  }

}
