import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-temas-cursos',
  templateUrl: './temas-cursos.component.html',
  styleUrls: ['./temas-cursos.component.css']
})
 
export class TemasCursosComponent implements OnInit {

  cursoInfo: any;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient) 
  { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.id = params.cursoID;

      this.obtenerInfocurso();
    });
  }

  obtenerInfocurso():void{
    this.http.get('http://Apirest-env.eba-tctazmdb.us-east-2.elasticbeanstalk.com/v1/cursos/' + this.id)
      .subscribe((res) => {
        console.log(res)
        this.cursoInfo = res;
      });
  }

}
