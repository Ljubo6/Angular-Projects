import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form!: FormGroup
  constructor(protected fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email,
          MyValidators.restrictedEmails
        ]),
        MyValidators.uniqEmail

      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
        ],
      address: new FormGroup({
        country: new FormControl('bg'),
        city: new FormControl('Sofia',Validators.required)
      }),
      skills: new FormArray([])

    })
  }

  submit() {
    if(this.form.valid){
      console.log('Form: ',this.form)
      const formData = {...this.form.value}
      console.log('Form data: ',formData)
      this.form.reset()
    }

  }

  setCapital() {
    const cityMap:any = {
      ru: 'Moscow',
      bg:'Sofia',
      rs:'Beograd'
    }
    let cityKey = this.form.get('address')!.get('country')!.value
    let city= cityMap[cityKey]
    this.form.patchValue({
      address:{city: city}
    })
  }

  addSkill() {
    const control = new FormControl(null,Validators.required);
    // (<FormArray>this.form.get('skills'))
    (this.form.get('skills') as FormArray).push(control)
  }

  getSkills(form: any) {
    return form.get('skills')?.controls
  }
}
