import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {

  langList = [
    { test : "light",
    },
    {test:"dark"}
  ]
  constructor() {}

  ngOnInit(): void {

  }

  public changeLang(code: string): void {

  }
}
