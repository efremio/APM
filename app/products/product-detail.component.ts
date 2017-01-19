import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent {
    pageTitle: string = "Product detail";
    product: IProduct;

    constructor(private _route: ActivatedRoute) {
        
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id']; //+ is a js shortcut to convert strings to numbers
        this.pageTitle += `: ${id}`;
}
}