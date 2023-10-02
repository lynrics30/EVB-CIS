import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token')
  const router = inject(Router)
  console.log('token', token)
  if (token){
    return true;
  } else {
    router.navigate(['/login'])
    Swal.fire({
      icon: 'warning',
      titleText: 'Invalid Token!',
      text: 'You need to login your account',
      showConfirmButton: false,
      timer: 2000,
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
    return false
  }
};
