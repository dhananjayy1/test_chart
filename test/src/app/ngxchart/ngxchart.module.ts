import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartRoutes } from './ngxchart.routing';
import { NgxChartComponent } from './ngxchart.component';

@NgModule({
  imports: [CommonModule, NgxChartRoutes],
  declarations: [NgxChartComponent],
})
export class NgxChartModule {}
