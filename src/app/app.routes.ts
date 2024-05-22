import { Routes } from '@angular/router';
import { TreeComponentComponent } from './tree-component/tree-component.component';
import { CurrentPriceComponent } from './current-price/current-price.component';
import { FootballComponent } from './football/football.component';

export const routes: Routes = [
  {
    path: '',
    component: FootballComponent,
    title: 'Football Component',
  },
  {
    path: 'tree-app',
    component: TreeComponentComponent,
    title: 'Tree Component',
  },
  {
    path: 'current-price',
    component: CurrentPriceComponent,
    title: 'Current Price Component',
  },
];
