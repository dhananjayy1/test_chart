import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartRoutes } from './ngxchart.routing';
import { NgxChartComponent } from './ngxchart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [CommonModule, NgxChartRoutes,NgxChartsModule ,  FormsModule, TableModule],
  declarations: [NgxChartComponent],
})
export class NgxChartModule {}
