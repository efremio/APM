import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = "Product detail";
    product: IProduct;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) {
        
    }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getProduct(id: number) {
        this._productService.getProduct(id).subscribe(
            product => this.product = product,
            error => this.errorMessage = <any>error);
    }


/* We could use the routerLink directive,
but here we use the code to navigate back.
Useful when we have to perform some actions before navigation (ie Save button)
*/
    onBack(): void {
        this._router.navigate(['/products']);
    }
}