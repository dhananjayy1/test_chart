import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      meta: {
        title: 'home.title',
        description: 'home.text',
        override: true,
      },
    },
  },
];

export const LoginRoutes = RouterModule.forChild(routes);
