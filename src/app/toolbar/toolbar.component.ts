import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

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
    const confirmation = confirm('Are you sure want to logout?');
    if (confirmation) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }

  public isLightTheme = false;

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;

    document.body.setAttribute(
      'data-theme',
      this.isLightTheme ? 'light' : 'dark'
    );
  }
}
