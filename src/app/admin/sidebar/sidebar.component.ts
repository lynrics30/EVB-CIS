import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{
  events: string[] = [];
  opened: boolean = true;

  @ViewChild(MatSidenav)
  SideNav!: MatSidenav;


  title = 'EVB-CIS';
  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 1040px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.SideNav.mode = 'over';
          this.SideNav.close();
        } else {
          this.SideNav.mode = 'side';
          this.SideNav.open();
        }
      });
  }
  
}
