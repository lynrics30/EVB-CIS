import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user = 'Administrator';

  @Input()
  inputSideNav!: MatSidenav;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    Swal.fire({
      titleText: 'Are you sure want to logout?',
      text: 'Please confirm if you want to logout',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirm',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          showClass: {
            popup: 'animate__animated animate__fadeInRight'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutRight'
          }
        });
        Toast.fire({
          icon: 'success',
          titleText: 'Logout Successfully',
        });
      }
    });
  }

  // public isLightTheme = false;

  // onThemeSwitchChange() {
  //   this.isLightTheme = !this.isLightTheme;

  //   document.body.setAttribute(
  //     'data-theme',
  //     this.isLightTheme ? 'light' : 'dark'
  //   );
  // }
}
