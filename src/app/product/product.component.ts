import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
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

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }

}
