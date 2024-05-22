import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrentPrice } from '../interfaces/interfaces';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root',
})
export class CurrentPriceService {
  private http = inject(HttpClient);

  constructor() {}

  getCurrentPrice(): Observable<CurrentPrice> {
    return this.http.get<CurrentPrice>(apiUrl);
  }
}
