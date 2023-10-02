import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addtin',
  templateUrl: './addtin.component.html',
  styleUrls: ['./addtin.component.scss'],
})
export class AddtinComponent {
  constructor() {}

  submit(): void {
    console.log('Record Added');
    Swal.fire({
      icon: 'success',
      titleText: 'Application For Tin Issuance/Update',
      text: 'Record Added Successfully!',
      showConfirmButton: false,
      timer: 2000,
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    })
  }
}
