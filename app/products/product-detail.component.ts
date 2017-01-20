import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    pageTitle: string = "Product detail";
    product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
        
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id']; //+ is a js shortcut to convert strings to numbers
        this.pageTitle += `: ${id}`;
    }

/* We could use the routerLink directive,
but here we use the code to navigate back.
Useful when we have to perform some actions before navigation (ie Save button)
*/
    onBack(): void {
        this._router.navigate(['/products']);
    }
}