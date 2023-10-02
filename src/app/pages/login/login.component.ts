import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword = false;
  errorMessage = '';
  showErrorShake: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  showErrorShakeAnimation() {
    this.showErrorShake = true;
    setTimeout(() => {
      this.showErrorShake = false;
    }, 400);
  }

  pass(): void {
    this.showPassword = !this.showPassword;
  }

  submit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      if (formData.username === 'admin' && formData.password === 'admin') {
        localStorage.setItem('token', Math.random().toString());
        this.router.navigate(['/admin']);
        console.log('Login Successfully');
        alert('Login Successfully!');
      } else {
        this.errorMessage = 'Invalid Username or Password!';
        this.showErrorShakeAnimation();
      }
    } else {
      this.errorMessage = 'Please fill out all fields.';
    }
  }
}
