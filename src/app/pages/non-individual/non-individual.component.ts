import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-non-individual',
  templateUrl: './non-individual.component.html',
  styleUrls: ['./non-individual.component.scss']
})
export class NonIndividualComponent {
constructor(private router:Router, private api:DataService) { }
  ngOnInit() {
  }

  submit(){
    this.router.navigate(['/admin/overall'])
    console.log("Client Info Submitted!")
    alert("Submitted!")
}
}
