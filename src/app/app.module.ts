import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainScreenComponent } from './main-screen/main-screen.component';
import { FromsAComponent } from './froms-a/froms-a.component';
import { from } from 'rxjs';
import { CodeComponent } from './code/code.component';
import { UpdateComponent } from './update/update.component';
import {HttpClientModule} from '@angular/common/http';
import { DynamicFormComponent } from './comp_dinmy/classes/dynamic-form/dynamic-form.component';
import { LoginComponent } from './comp_dinmy/classes/login/login.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';
import { CompUploadComponent } from './components/comp-upload/comp-upload.component';
import { CompUpdateComponent } from './comp-update/comp-update.component';
import { CompInternComponent } from './components/comp-intern/comp-intern.component';
import { InternUploadComponent } from './intern-upload/intern-upload.component';
import { TestUsersComponent } from './components/test-users/test-users.component';
import {WebcamModule} from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';
import { CrateCameraComponent } from './crate-camera/crate-camera.component';
import { UpdateSupervisorComponent } from './update-supervisor/update-supervisor.component';
import { LoginRegisretComponent } from './login-regisret/login-regisret.component';
@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    FromsAComponent,
    CodeComponent,
    UpdateComponent,
    DynamicFormComponent,
    LoginComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
    CompUploadComponent,
    CompUpdateComponent,
    CompInternComponent,
    InternUploadComponent,
    TestUsersComponent,
    CameraComponent,
    CrateCameraComponent,
    UpdateSupervisorComponent,
    LoginRegisretComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
