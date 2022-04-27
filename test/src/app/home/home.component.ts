import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

import { DOCUMENT, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(
  ) {}

  ngOnInit(): void {

  }
}
