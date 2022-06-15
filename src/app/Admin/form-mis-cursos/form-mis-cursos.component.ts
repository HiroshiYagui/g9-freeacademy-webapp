import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, FormArray, NgForm, Validators } from '@angular/forms'
import {HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { curso } from './curso';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-mis-cursos',
  templateUrl: './form-mis-cursos.component.html',
  styleUrls: ['./form-mis-cursos.component.css']
})
export class FormMisCursosComponent implements OnInit {
 
  ApiCurso:string="http://Apirest-env.eba-tctazmdb.us-east-2.elasticbeanstalk.com/v1/cursos"

  constructor(private fb:FormBuilder, private http: HttpClient, private router: Router ) { }
  AgCurso:FormGroup

  ngOnInit(){
    this.AgCurso=this.fb.group({
      nombre:["",Validators.required],
      profesor:["",Validators.required],
      descripcion:["",Validators.required],
      //imagen:["",Validators.required],
    });
  }
  
  enviarDatos(_datos){
    console.log(_datos.value);
    this.agregarCurso(_datos.value).subscribe();
    this.router.navigate(['/Mis-cursos']);
  }

  agregarCurso(datosCurso:curso):Observable<any>{
    console.log(datosCurso);
    return this.http.post(this.ApiCurso, datosCurso);

  }
}
