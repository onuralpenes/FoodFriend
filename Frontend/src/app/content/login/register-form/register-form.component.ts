import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Match } from 'src/app/helpers/match.validator';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  color = 'primary';
  registerForm!: FormGroup;
  submitted = false;
  hidePassword = true;
  hidePasswordConfirmation = true;
  approved = false;
  privacyPolicy = false;
  genders =[
    {id: 1, name : "Male"},
    {id: 2, name : "Female"},
    {id: 0, name: "Genderless"},
  ]

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordConf: new FormControl('', [Validators.required, Validators.minLength(8)]),
      birthDate: new FormControl('', [Validators.required]),
      genderId: new FormControl('', [Validators.required]),
      privacyPolicy: new FormControl('', [Validators.required]),
    }, { validator: Match('password', 'passwordConf') });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.approved = true;
    this.registerForm.value.genderId = this.registerForm.value.genderId.id;
    console.log(this.registerForm.value)
    this.registerService.register(this.registerForm.value);
  }

  signIn() {
    location.reload();
  }
}

