import { Injectable } from '@angular/core'; // this is a service
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router'; // ActivatedRouteSnapshot contains info about our rout at any time

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path; //"product/10", take the second element which is the ID
        if (isNaN(id) || id < 1) {
            alert('Invalid product ID'); // in a real app we don't want this. maybe a redirect to an error page
            // start a new navigation to redirect to list page
            this._router.navigate(['/products']);
            //abort current navigation
            return false;
        }
        return true;
    }
}