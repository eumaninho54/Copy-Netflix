import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/components/login/login.service';

@Component({
  selector: 'app-login-main',
  templateUrl: './login.main.component.html',
  styleUrls: ['./login.main.component.scss']
})
export class LoginMainComponent implements OnInit {
  messageError: boolean = false
  loginFormGroup!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      'email' : ['', [Validators.required, Validators.pattern]],
      'password': [null, [Validators.required, Validators.minLength(4), Validators.maxLength(60)]]
    })

    this.loginFormGroup.get('email')?.valid
  }

  loginSignIn(){
    if (this.loginFormGroup.invalid){
      this.messageError = true
      this.loginService.verificLogin(false)

    }else{
      this.messageError = false
      this.loginService.verificLogin(true)
    }
  }

}
