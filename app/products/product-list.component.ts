import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,    //if we use module.id we can use relative paths!
    templateUrl: 'product-list.component.html', //relative path
    styleUrls: ['product-list.component.css']
})

export class ProductListConponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter:string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) { } //automatically assigns the parameter to the private var

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit() {
        this._productService.getProducts() //observables are lazy. the don't start to emit values until someone calls subscribe
            .subscribe(products => this.products = products, //the action to take every time an item is emitted (in this case there is only one item)
            error => this.errorMessage = <any>error); //if the observable fails
            //there is another optional function that is called when the observer has finished emitting items. not really used for one-item returns
 }

    onRatingClicked(message: string) { //the parameter is the payload
        this.pageTitle = 'Product List: ' + message;
    }

}