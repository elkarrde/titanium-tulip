import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService }  from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  products: Product[];

  @Input() product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(product => this.product = product);
  }

  save(): void {
    this.productService.updateProduct(this.product).subscribe(() => this.goBack());
  }

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
