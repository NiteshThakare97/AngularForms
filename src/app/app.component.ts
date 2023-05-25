import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry = 'india';
  firstname: string;
  lastname: string;
  defaultGender = 'Female'

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]
  @ViewChild('myForm') form: NgForm;

  onSubmit(){
    console.log(this.form);
  }

  setDefaultValues(){
    // this.form.value.personalDetails.firstname = 'John';
    // this.form.value.personalDetails.lastname = 'Smith';
    // this.form.value.personalDetails.email = 'abc@example.com';

    // setValue() method should be used to set values of the form if we want to set values for all the form controls.
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personalDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com'
    //   }
    // })

    //patchValue() method
    this.form.form.patchValue({
      personalDetails: {
        firstname: 'John',
        lastname: 'Smith',
        email: 'abc@example.com'
      }
    })
  }
}
