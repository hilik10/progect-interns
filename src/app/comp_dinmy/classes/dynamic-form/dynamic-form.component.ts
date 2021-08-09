import { Component, Input, OnInit, Output  , EventEmitter} from '@angular/core';
import { settingForm } from '../settingsForm';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Output() clickEvent : EventEmitter<any>;
@Input() settingsForm: settingForm<any> ;
 
  constructor() { 
    this.clickEvent= new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  output(event){
    
    this.clickEvent.emit(this.settingsForm.obj);
  }

}
