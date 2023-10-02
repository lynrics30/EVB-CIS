import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/confirm-password-validator';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        currentpassword: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: ConfirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }

  update() {
    Swal.fire({
      titleText: 'Update your profile?',
      text: 'Please confirm if you want to update your profile',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          titleText: 'Profile Updated!',
          text: 'Thank You!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        // this.submitform.reset();
        this.router.navigate(['/admin/profile']);
        this.submitted = true;
      }
    });
  }

  onSubmit() {
    Swal.fire({
      titleText: 'Change your password?',
      text: 'Please confirm if you want to change your password',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          titleText: 'Password Changed Successfully!',
          text: 'Thank You!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
        // this.submitform.reset();
        this.submitted = true;
      }
    });
  }
}
