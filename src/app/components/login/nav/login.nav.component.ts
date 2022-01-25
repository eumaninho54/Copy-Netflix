import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Aos from 'aos';

@Component({
  selector: 'app-login-nav',
  templateUrl: './login.nav.component.html',
  styleUrls: ['./login.nav.component.scss']
})
export class LoginNavComponent implements OnInit {
  messageError: boolean = false
  loginFormGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    Aos.init({
      duration: 2000,
      
    })

    this.loginFormGroup = this.formBuilder.group({
      'email' : ['', [Validators.required, Validators.pattern]],
      'password': [null, [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
    })

    this.loginFormGroup.get('email')?.valid
  }

  loginSignIn(){
    if (this.loginFormGroup.invalid){
      this.messageError = true
      alert("Error")

    }else{
      this.messageError = false
      this.router.navigate(['/'])
    }
  }

}
