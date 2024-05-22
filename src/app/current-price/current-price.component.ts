import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CurrentPriceService } from '../services/current-price.service';
import { CurrentPrice } from '../interfaces/interfaces';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-current-price',
  standalone: true,
  templateUrl: './current-price.component.html',
  styleUrl: './current-price.component.css',
  imports: [LoaderComponent, NgIf, CommonModule],
})
export class CurrentPriceComponent implements AfterViewInit {
  private currentPriceService = inject(CurrentPriceService);

  @ViewChild(LoaderComponent) loader?: LoaderComponent;

  currentPrice: CurrentPrice | undefined;
  isLoading?: boolean;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = this.loader?.isLoading;
      this.loader?.showLoader(true);
      this.loadCuyrrentPrice();
    }, 100);
  }

  loadCuyrrentPrice() {
    this.currentPriceService.getCurrentPrice().subscribe({
      next: (res: any) => {
        this.currentPrice = res as CurrentPrice;
        this.loader?.showLoader(false);
        console.log(res);
        console.log('isLoading', this.isLoading);
      },
      error: (error) => console.log('Error in fetching prices', error),
    });
  }
}
