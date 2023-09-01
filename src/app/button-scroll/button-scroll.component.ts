import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-scroll',
  templateUrl: './button-scroll.component.html',
  styleUrls: ['./button-scroll.component.scss'],
})
export class ButtonScrollComponent implements OnInit {
  showScroll: boolean;
  showScrollHeight: number = 500;
  hideScrollHeight: number = 500;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  onWindowScroll() {
    const scrollY =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (scrollY > this.showScrollHeight) {
      this.showScroll = true;
    } else if (this.showScroll && scrollY < this.hideScrollHeight) {
      this.showScroll = false;
    }
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
