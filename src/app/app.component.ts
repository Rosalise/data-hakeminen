import { Component } from '@angular/core';
import { Product } from './models/product';
import { products as data } from 'src/app/data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-hakeminen';
  term: string = '';
  products: Product[] = data;
  details: boolean | undefined;
}
