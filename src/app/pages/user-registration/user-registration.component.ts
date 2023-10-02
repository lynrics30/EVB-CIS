import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent {
  showPassword = false;
  user: any;
  selectedBranch: string;
  selectedDepartment: string;
  fullname: string;
  username: string;
  password: string;
  role: string;
  currentID = '';
  branch: any = [
    {
      branchID: 1,
      name: 'Biñan Branch',
    },
    {
      branchID: 2,
      name: 'Cainta Branch',
    },
    {
      branchID: 3,
      name: 'Calapan Branch',
    },
    {
      branchID: 4,
      name: 'Head Office',
    },
    {
      branchID: 5,
      name: 'Intramuros Branch',
    },
    {
      branchID: 6,
      name: 'Lemery Branch',
    },
    {
      branchID: 7,
      name: 'Lipa Branch',
    },
    {
      branchID: 8,
      name: 'Printing Press',
    },
    {
      branchID: 9,
      name: 'Stronghold Insurance Company, Inc.',
    },
    {
      branchID: 10,
      name: 'Taytay Branch',
    },
  ];

  department: any = [
    {
      departmentID: 1,
      name: 'Marketing Department',
    },
    {
      departmentID: 2,
      name: 'Finance Department',
    },
    {
      departmentID: 3,
      name: 'Licensing Department',
    },
    {
      departmentID: 4,
      name: 'Accounting Department',
    },
    {
      departmentID: 5,
      name: 'Disbursing Department',
    },
    {
      departmentID: 6,
      name: 'IICS Department',
    },
    {
      departmentID: 7,
      name: 'Documentation Department',
    },
    {
      departmentID: 8,
      name: 'Department',
    },
    {
      departmentID: 9,
      name: 'SPP Department',
    },
  ];

  constructor(
    private router: Router,
    private api: DataService,
  ) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  pass(): void {
    this.showPassword = !this.showPassword;
  }

  getAllUser() {
    this.api.getAll().subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
  }

  submit() {
    var data = {
      id: this.currentID,
      branch: this.selectedBranch,
      department: this.selectedDepartment,
      fullname: this.fullname,
      username: this.username,
      password: this.password,
      role: this.role,
    };

    this.api.addUser(data).subscribe({
      next: (res: any) => {
        console.log(data);
        this.router.navigate(['/admin/dashboard']);
        Swal.fire({
          icon: 'success',
          titleText: 'Added Successfully',
          text: 'Created new account!',
          showConfirmButton: false,
          timer: 2000,
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      },
      error: (err: any) => {
        Swal.fire({
          icon: 'warning',
          titleText: 'Added Failed',
          text: 'Please fill out all fields.',
          showConfirmButton: false,
          timer: 2000,
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
          },
        });
      },
    });
  }
}
