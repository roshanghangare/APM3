import {Injectable} from '@angular/core';
import{Http,Response} from '@angular/http'
import{IProduct} from './product';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable() 
export class ProductService{
    url:string='api/products/products.json';
    products:IProduct[];
    constructor(private _http:Http){

    }
    
    getProducts():Observable<IProduct[]> {
          return this._http.get(this.url).map((response:Response)=><IProduct[]> response.json())
          .do(res=>console.log(JSON.stringify(res)))
          .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error|| 'Server error');
    }
}