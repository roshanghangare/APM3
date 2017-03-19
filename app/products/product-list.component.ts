import{ Component,OnInit } from '@angular/core'
import{IProduct} from './product';
import{ProductService} from './product.service';

@Component({
    selector:'pm-products',
    moduleId:module.id,
    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    lstFilter:string ;
    errorMessage:string;
   
    constructor(private _productService:ProductService){

    }
   
    toggleImage():void{
        this.showImage=!this.showImage;
    }
     ngOnInit():void{
          this._productService.getProducts()
         .subscribe(products=>this.products=products,errorMessage=>this.errorMessage=<any>errorMessage);
    }
    containerFunction( emittedData :string):void{
         this.pageTitle=emittedData;
    }
    products:IProduct[] ;

}