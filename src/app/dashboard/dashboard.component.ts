import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products.slice(1, 3));
  }

  add(name: string, price: number, vendor: string, category: string): void {
    name = name.trim();
    price = price;
    vendor = vendor.trim();
    category = category.trim();

    if (!name) { return; }
    if (!price) { return; }
    if (!vendor) { vendor = ''; }
    if (!category) { category = ''; }

    this.productService.addProduct({ name, price, vendor, category } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }
}