import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaDeVideosComponent } from './lista-de-videos/lista-de-videos.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { HeaderAdmComponent } from './Admin/header-adm/header-adm.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CursosComponent } from './Admin/cursos/cursos.component';
import { MisCursosComponent } from './Admin/mis-cursos/mis-cursos.component';
import { TemasCursosComponent } from './Admin/temas-cursos/temas-cursos.component';
import { ListaMisCursosComponent } from './Admin/lista-mis-cursos/lista-mis-cursos.component';
import { FormMisCursosComponent } from './Admin/form-mis-cursos/form-mis-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaDeVideosComponent,
    VideoPlayerComponent,
    HeaderAdmComponent,
    UserLoginComponent,
    CursosComponent,
    MisCursosComponent,
    TemasCursosComponent,
    ListaMisCursosComponent,
    FormMisCursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
