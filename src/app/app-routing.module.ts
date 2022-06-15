import { VideoPlayerComponent } from './video-player/video-player.component';
import { ListaDeVideosComponent } from './lista-de-videos/lista-de-videos.component';
import { HeaderAdmComponent } from './Admin/header-adm/header-adm.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CursosComponent } from './Admin/cursos/cursos.component';
import { MisCursosComponent } from './Admin/mis-cursos/mis-cursos.component';
import { FormMisCursosComponent } from './Admin/form-mis-cursos/form-mis-cursos.component';
import { ListaMisCursosComponent } from './Admin/lista-mis-cursos/lista-mis-cursos.component';

import { TemasCursosComponent } from './Admin/temas-cursos/temas-cursos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'lista-video' , component: ListaDeVideosComponent },
  { path: 'video-player/:videoID' , component: VideoPlayerComponent },
  { path: 'header-adm' , component: HeaderAdmComponent },
  { path: 'user-login' , component: UserLoginComponent },
  { path: 'cursos' , component: CursosComponent },
  { path: 'Mis-cursos' , component: ListaMisCursosComponent },
  { path: 'Temas/:cursoID' , component: TemasCursosComponent },
  { path:'form-mis-cursos',component:FormMisCursosComponent},
  { path:'Lista-mis-cursos',component:ListaMisCursosComponent},

  { path: '' , redirectTo: 'cursos' , pathMatch: 'full' },
  { path: '**' , component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
