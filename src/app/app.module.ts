import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PlumberComponent } from './plumber/plumber.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    PostDetailComponent,
    DoctorComponent,
    PlumberComponent,
    ServiceDetailComponent,
    ChangePasswordComponent,
    NotFoundComponent,
    NavbarComponent,
    LoginComponent,
    NewPostComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CKEditorModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'home/new-post', component: NewPostComponent},
      {path: 'home/post-detail/:id', component: PostDetailComponent},
      {path: 'doctor', component: DoctorComponent},
      {path: 'doctor/:id', component: ServiceDetailComponent},
      {path: 'plumber', component: PlumberComponent},
      {path: 'plumber/:id', component: ServiceDetailComponent},
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'event', component: EventComponent},
      {path: '**', component: NotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
