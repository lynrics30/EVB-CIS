import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

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
  users: any;

  constructor(
    private router: Router,
    private api: DataService,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.api.getAll().subscribe((res) => {
      this.users = res;
      console.log(this.users);
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
      // const formData = this.loginForm.value;
      // this.getAllUser;

      // this.api.login(formData).subscribe({
      //   next: (res) => {
      //     console.log(res);
      //     this.users = res;
      //   },
      //   error: (err: any) => {
      //     console.log(this.users);
      //   },
      // });

      // if (
      //   formData.username == this.users.username &&
      //   formData.password == this.users.password
      // ) {
      //   alert('haha');
      // } else {
      //   alert('hehe');
      // }

      const formData = this.loginForm.value;

      if (formData.username === 'admin' && formData.password === 'admin') {
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInRight',
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutRight',
          },
        });
        Toast.fire({
          icon: 'success',
          titleText: 'Login Successfully',
        });
        localStorage.setItem('token', JSON.stringify(formData));
        this.router.navigate(['/admin']);
        console.log('Login Successfully');
      } else {
        if (formData.username !== 'admin' && formData.password !== 'admin') {
          this.loginForm.get('username').setErrors({ incorrect: true });
          this.loginForm.get('password').setErrors({ incorrect: true });
          this.showErrorShakeAnimation();
        } else if (formData.username !== 'admin') {
          this.loginForm.get('username').setErrors({ incorrect: true });
          this.showErrorShakeAnimation();
        } else if (formData.password !== 'admin') {
          this.loginForm.get('password').setErrors({ incorrect: true });
          this.showErrorShakeAnimation();
        }
      }
    } else {
      this.showErrorShakeAnimation();
      this.loginForm.get('username').markAsTouched();
      this.loginForm.get('password').markAsTouched();
    }
  }
}
