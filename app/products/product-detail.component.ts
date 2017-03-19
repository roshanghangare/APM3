import {Component,OnInit} from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
    selector:'pm-productDetail',
    templateUrl:'product-details.component.html',
    moduleId:module.id,
    })
export class ProductDetailComponent implements OnInit{
pageTitle:string='Product Details';
constructor(private _route:ActivatedRoute, private _router:Router){

}
ngOnInit(): void
{
    let id = +this._route.snapshot.params['id'];
    this.pageTitle+= `: ${id}`;
}
BackClicked():void{
    this._router.navigate(['/products']);
}
}