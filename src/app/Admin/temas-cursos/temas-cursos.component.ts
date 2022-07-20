import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder, FormControl, FormArray, NgForm, Validators } from '@angular/forms'
import { Observable, observable } from 'rxjs';
import { suscripcion } from './suscripcion';

import { Router } from '@angular/router';

@Component({
  selector: 'app-temas-cursos',
  templateUrl: './temas-cursos.component.html',
  styleUrls: ['./temas-cursos.component.css']
})
 
export class TemasCursosComponent implements OnInit {

  ApiSuscrpcion:string="http://Apirest-env.eba-tctazmdb.us-east-2.elasticbeanstalk.com/v1/suscribir/";
  AgSus:FormGroup

  cursoInfo: any;
  id: number;
  idUsuario:number =1;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) 
  { }

  ngOnInit() {
    

    this.route.params.subscribe(params => {

      this.id = params.cursoID;

      this.obtenerInfocurso();
    });

    this.AgSus=this.fb.group({
      idCurso:[this.id],
      idUsuario:[this.idUsuario],
    });
  }

  obtenerInfocurso():void{
    this.http.get('http://Apirest-env.eba-tctazmdb.us-east-2.elasticbeanstalk.com/v1/cursos/' + this.id)
      .subscribe((res) => {
        console.log(res)
        this.cursoInfo = res;
      });
  }

  enviarDatosSus(_datosSus){
    console.log(_datosSus.value);
    this.agregarSuscripcion(_datosSus.value).subscribe();
  }
  agregarSuscripcion(datosSus:suscripcion):Observable<any>{
    return this.http.post(this.ApiSuscrpcion,datosSus);

  }
}
