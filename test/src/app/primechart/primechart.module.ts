import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/chart';
import { PrimeChartRoutes } from './primechart.routing';
import { PrimeChartComponent } from './primechart.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [CommonModule, PrimeChartRoutes,ChartModule,TableModule],
  declarations: [PrimeChartComponent],
})
export class PrimeChartModule {}
