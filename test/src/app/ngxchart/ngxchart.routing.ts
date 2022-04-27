import {NgxChartComponent } from './ngxchart.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NgxChartComponent,
  },
];

export const NgxChartRoutes = RouterModule.forChild(routes);
