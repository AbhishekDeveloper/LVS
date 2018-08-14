import { Component } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
    selector:'question-header',
    templateUrl: './question-header.html',
    styleUrls: ['./question-header.css']
})
export class QuestionHeaderComponent
{
public data: any;
constructor(private homeSrv: HomeService){
   
}


ngOnInit()
{
    this.homeSrv.getData()
    .subscribe(r=>{
      
         this.data = (JSON.parse(r));
    });
 

}
}