import { SettingsInput } from "./settingsInput";

export class settingForm <T>{
    settingInputs : SettingsInput[];
    settingButton : any;
    obj :T;

    constructor(obj :T){
this.obj = obj;
    }
}