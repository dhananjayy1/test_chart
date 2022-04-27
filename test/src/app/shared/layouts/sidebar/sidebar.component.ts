import { Component, OnInit } from '@angular/core';

const LINKS: any[] = [
  { link: '/home', name: 'home', icon: 'home' },
  { link: '/primechart', name: 'prime ng chart', icon: 'info_outline' },
  { link: '/ngxchart', name: 'ngx chart', icon: 'swap_vert' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  public links: any[] = [];
  constructor() {}
  ngOnInit(): void {
    const linkTemp = JSON.parse(JSON.stringify(LINKS));
    this.links = linkTemp.map((link: { name: string; }) => {
      link.name = `${link.name}`;
      return link;
    });
  }

  logout() {
    // this.auth.logOut();
  }
}
