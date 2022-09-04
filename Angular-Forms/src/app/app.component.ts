import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  form!: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null,[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null,[
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('bg'),
        city: new FormControl('Sofia',Validators.required)
      })
    })
  }

  submit() {
    if(this.form.valid){
      console.log('Form: ',this.form)
      const formData = {...this.form.value}
      console.log('Form data: ',formData)
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
}
