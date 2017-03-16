
import{Component,Input} from '@angular/core';
@Component({
  selector:'pm-star',
  moduleId:module.id,
  templateUrl:'star.component.html',
  styleUrls:['star.component.css'],
  })
export class StarComponent{
    rating:number=4;
    starWidth:number=86;
    calculateWidth():void{
        this.starWidth=(this.starWidth/5)*this.rating;
    }
}