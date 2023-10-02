import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-non-individual',
  templateUrl: './non-individual.component.html',
  styleUrls: ['./non-individual.component.scss'],
})
export class NonIndividualComponent {
  constructor(private router: Router, private api: DataService) {}
  ngOnInit() {}

  submit() {
    this.router.navigate(['/admin/overall']);
    // this.submitform.reset();
    console.log('Client Info Submitted!');
    Swal.fire({
      icon: 'success',
      titleText: 'Non-Individual',
      text: 'New Client Registered to the Database!',
      showConfirmButton: false,
      timer: 2000,
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  }
}
