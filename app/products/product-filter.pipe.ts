import{Pipe,PipeTransform} from '@angular/core';
import{IProduct} from './product';

@Pipe({
    name:'productFilterPipe'
})
export class ProductFilterPipeClass implements PipeTransform
{
    transform(value: IProduct[], filter: string):IProduct[]{
        filter=filter?filter.toLocaleLowerCase():null;
        value=filter==null?value:value.filter((p:IProduct)=>p.productName.toLocaleLowerCase().indexOf(filter)!=-1);
        return value;
    }
}