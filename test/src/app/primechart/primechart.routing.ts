import { PrimeChartComponent } from './primechart.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PrimeChartComponent
  }
];

export const PrimeChartRoutes = RouterModule.forChild(routes);
