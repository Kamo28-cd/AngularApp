import { Routes } from '@angular/router';
import { TreeComponentComponent } from './tree-component/tree-component.component';
import { AppComponent } from './app.component';
import { ApiCallComponent } from './api-call/api-call.component';

const routes: Routes = [
  { path: '', component: AppComponent, title: 'Home Page' },
  {
    path: '/tree-app',
    component: TreeComponentComponent,
    title: 'Tree Component',
  },
  {
    path: '/api-call',
    component: ApiCallComponent,
    title: 'Api Call Component',
  },
];

export default routes;
