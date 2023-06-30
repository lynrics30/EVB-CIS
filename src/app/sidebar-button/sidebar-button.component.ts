import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent implements OnInit {

  @ViewChild(MatSidenav)
  SideNav!: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
