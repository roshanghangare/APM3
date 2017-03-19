import{Component,Input,OnChanges,EventEmitter,Output} from '@angular/core';
@Component({
  selector:'pm-star',
  moduleId:module.id,
  templateUrl:'star.component.html',
  styleUrls:['star.component.css'],
  })
export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Output() notify:EventEmitter<string>=new EventEmitter<string>();
    ngOnChanges():void{
        this.starWidth=(86/5)*this.rating;
    }
    IamClicked():void{
        this.notify.emit('Bhau I am clicked ur rating is :'+this.rating);
        
    }
};