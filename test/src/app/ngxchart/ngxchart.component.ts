import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

import { DOCUMENT, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-ngxchart',
  templateUrl: './ngxchart.component.html',
})
export class NgxChartComponent implements OnInit {

  single = [
    {
      "name": "Germany",
      index: 0,
      "value": 8940000
    },
    {
      "name": "USA",
      index: 1,
      "value": 5000000
    },
    {
      "name": "France",
      index: 2,
      "value": 7200000
    },
      {
        "name": "UK",
        index: 3,
      "value": 6200000
    }
  ];
  cars: any = [
    {vin:"2", year:"1992", brand:"mahindra", color:"red"},
  ]
  // single: any[];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = 'right';

  colorScheme :any =  {domain :['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
}
  constructor() {
    // Object.assign(this, { single });
  }

  ngOnInit(): void {
  }

  onSelect(data:any): void {
    console.log('Item clicked', data.value);
    let output = this.updateTableData(data.value);
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  updateTableData(data :any) {
    if (data.value > 5000000 && data.value < 7000000) {
      this.cars = [
        {vin:"2", year:"1992", brand:"mahindra", color:"red"},
        {vin:"3", year:"1992", brand:"tata", color:"red"},
      ]
    }
    else if (data.value > 7000000 && data.value < 9000000) {
      this.cars = [
        {vin:"2", year:"1992", brand:"mahindra", color:"red"},
      ]
    } else if (data.value > 9000000 && data.value < 19000000) {
      this.cars = [
        { vin: "2", year: "1992", brand: "mahindra", color: "red" },
        { vin: "3", year: "1992", brand: "tata", color: "red" },
        { vin: "3", year: "1992", brand: "tata", color: "red" },
        { vin: "3", year: "1992", brand: "tata", color: "red" },
        { vin: "3", year: "1992", brand: "tata", color: "red" },
      ];
    }
    // return index;
  }
}
