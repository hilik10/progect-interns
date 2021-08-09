import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeComponent } from './code/code.component';
import { FromsAComponent } from './froms-a/froms-a.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { UpdateComponent } from './update/update.component';
import { LoginComponent } from './comp_dinmy/classes/login/login.component';
import { CompUpdateComponent } from './comp-update/comp-update.component';
import { CompUploadComponent } from './components/comp-upload/comp-upload.component';
import { CompInternComponent } from './components/comp-intern/comp-intern.component';
import { TestUsersComponent } from './components/test-users/test-users.component';
import { CameraComponent } from './camera/camera.component';
import { CrateCameraComponent } from './crate-camera/crate-camera.component';
import { UpdateSupervisorComponent } from './update-supervisor/update-supervisor.component';
import { LoginRegisretComponent } from './login-regisret/login-regisret.component';

const routes: Routes = [
{path:'',component:MainScreenComponent},
{path:"welcome",component:FromsAComponent},
{path:'loginRegister',component:LoginRegisretComponent},
{path: "login", component : LoginComponent},
{path :'welcome/login',component:LoginComponent},
{path:"welcome/code",component:CodeComponent},
{path:'welcome/update',component:CompUpdateComponent},
{path:'supervisorUpdate',component:UpdateSupervisorComponent},
{path:'update',component:UpdateComponent},
{path:'testUsers',component:TestUsersComponent},
{path:"welcome/upload",component:CompUploadComponent },
{path:"welcome/intern",component:CompInternComponent},
{path:"camera",component:CrateCameraComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
