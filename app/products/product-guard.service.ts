import {Injectable} from '@angular/core';
import{ActivatedRouteSnapshot} from '@angular/router';
import{Router} from '@angular/router';

@Injectable()
export class ProductGuardService    {
constructor(private _route:Router ){

}
canActivate(route: ActivatedRouteSnapshot)
{
    let id= +route.url[1].path;
    if (isNaN(id) || id<1 ){
        alert('Invalid product id');
        console.log('        alert( );')
        this._route.navigate(['/products']);
        return false;
    }
    return true;
}
 

}