import { VideoPlayerComponent } from './video-player/video-player.component';
import { ListaDeVideosComponent } from './lista-de-videos/lista-de-videos.component';
import { HeaderAdmComponent } from './Admin/header-adm/header-adm.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CursosComponent } from './Admin/cursos/cursos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'lista-video' , component: ListaDeVideosComponent },
  { path: 'video-player/:videoID' , component: VideoPlayerComponent },
  { path: 'header-adm' , component: HeaderAdmComponent },
  { path: 'user-login' , component: UserLoginComponent },
  { path: 'cursos' , component: CursosComponent },
  { path: '' , redirectTo: 'lista-video' , pathMatch: 'full' },
  { path: '**' , component: ListaDeVideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
