import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: [ './product-search.component.css' ]
})

export class ProductSearchComponent implements OnInit {
  products$: Observable<Product[]>;
  private searchTerms = new Subject<string>();

  constructor(private productService: ProductService) {}

  search(term: string): void {
    this.searchTerms.next(term);

    let topPos = jQuery('#search-box').position().top + 35;
    let width = jQuery('#search-box').outerWidth() + 3;
    jQuery('.search-result').css({top: topPos + 'px'});
    jQuery('.search-result li').css({width: width + 'px'});
  }

  clearResults(): void {
    this.searchTerms.next('');
  }

  ngOnInit(): void {
    this.products$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.productService.searchProducts(term)),
    );
  }
}
