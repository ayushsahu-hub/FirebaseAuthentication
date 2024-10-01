import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../appServices/auth.service';
import { AuthResponse } from '../appInterface/auth-response-interface';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  loginMode = true;
  Form = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(5)])
  })
  constructor(private fb:FormBuilder,private authService:AuthService){}

  ngOnInit(): void {
    
  }

  onSubmit(){
    if (this.Form.valid) {   
      const email = this.Form.controls['email'].value ? this.Form.controls['email'].value : '';
      const password = this.Form.controls['password'].value ? this.Form.controls['password'].value : '';   
      if (this.loginMode) {
        // loginRequest
        this.authService.signIn(email,password).subscribe({
          next: (value: AuthResponse) => console.log(value),
          error: (err) => console.log(err)
        })
      } else {
        // signup
        this.authService.signUp(email,password).subscribe({
          next: (value: AuthResponse) => console.log(value),
          error: (err) => console.log(err)
        })
      }
     
    }     
  }

  onModeSwitch(){
    this.loginMode = !this.loginMode;
  }
}
