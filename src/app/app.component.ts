import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TreeComponentComponent } from './tree-component/tree-component.component';
import { CurrentPriceComponent } from './current-price/current-price.component';
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    TreeComponentComponent,
    RouterModule,
    CurrentPriceComponent,
    LoaderComponent,
  ],
})
export class AppComponent {
  title = 'assignment';
}
