import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-primechart',
  templateUrl: './primechart.component.html',
})
export class PrimeChartComponent implements OnInit {

  data: any;

  chartOptions: any;

  cars: any = [
  ]

  constructor(
  ) {
    this.data = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D"
            ]
        }
    ]
  }
  }

  ngOnInit(): void {
this.chartOptions = {
  plugins: {
      legend: {
          labels: {
              color: '#495057'
          }
      }
  }
}
  }

  selectData(event:any) {
   console.log("dataset selected",event.dataset)
    console.log("event selected",event.element.index)
    console.log("event element selected",event.element._datasetIndex)
    console.log("event element index selected", event.element._index);
    this.updateTableData(event.element.index);
  }

  updateTableData(index: number) {
    if (index == 0) {
      this.cars = [
        {vin:"2", year:"1992", brand:"mahindra", color:"red"},
        {vin:"3", year:"1992", brand:"tata", color:"red"},
      ]
    } else if (index == 1) {
      this.cars = [
        {vin:"2", year:"1992", brand:"mahindra", color:"red"},
      ]
    } else if (index == 2) {
      this.cars = [
        { vin: "2", year: "1992", brand: "mahindra", color: "red" },
        { vin: "3", year: "1992", brand: "tata", color: "red" },
        { vin: "3", year: "1992", brand: "tata", color: "red" },
        { vin: "3", year: "1992", brand: "tata", color: "red" },
        { vin: "3", year: "1992", brand: "tata", color: "red" },
      ];
    }
  }

  update(event: Event) {
    // this.data = //create new data
}

}
