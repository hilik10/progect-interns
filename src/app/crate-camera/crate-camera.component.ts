import { Component, OnInit } from '@angular/core';
import {Subject,Observable} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';
@Component({
  selector: 'app-crate-camera',
  templateUrl: './crate-camera.component.html',
  styleUrls: ['./crate-camera.component.scss']
})
export class CrateCameraComponent  {

  public webcamImage: WebcamImage = null;
  handleImage(webcamImage: WebcamImage) {
  this.webcamImage = webcamImage;
  console.log(webcamImage.imageAsDataUrl);
  
  }
  
  

}
