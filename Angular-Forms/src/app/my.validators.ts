import {FormControl} from "@angular/forms";

export class MyValidators {
  static restrictedEmails(control: FormControl):{[key:string]:boolean} | null{
    if(['proba@abv.bg','test@abv.bg'].includes(control.value)){
      return{
        restrictedEmail: true
      }
    }
    return null
  }
}
