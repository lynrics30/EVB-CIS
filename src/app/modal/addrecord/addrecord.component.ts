import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.scss'],
})
export class AddrecordComponent {
  constructor() {}

  submit(): void {
    console.log('Record Added');
    Swal.fire({
      icon: 'success',
      titleText: '1601C',
      text: 'Record Added Successfully!',
      showConfirmButton: false,
      timer: 2000,
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    })
  }
}
