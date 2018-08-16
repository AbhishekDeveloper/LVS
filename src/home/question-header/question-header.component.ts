import { Component,Input, Output, EventEmitter} from '@angular/core';
import { HomeService } from '../home.service';
declare var $: any;
@Component({
    selector:'question-header',
    templateUrl: './question-header.html',
    styleUrls: ['./question-header.css']
})

export class QuestionHeaderComponent
{
public data:any;
public question: string;
public questionCategory: string;
public userName: string;
public allInfo:{
    userName: string,
    category: string,
    question: string
}
@Input() getUser: string;
@Output()   verifyActionResponse: EventEmitter<any> = new EventEmitter<any>();
constructor(private homeSrv: HomeService){
   
}


ngOnInit()
{
    this.userName =this.getUser;
    this.homeSrv.getDataByUserName('Sebas')
    .subscribe(r=>{
         this.data = r[0].question;
         this.setDefaultQuestion();
    });
 

}
ngAfterViewInit() {
  
  }
ngOnChanges()
{
    this.userName =this.getUser;
    if(this.userName == '--select user--')
    {

    }
    else{
        this.homeSrv.getDataByUserName(this.userName)
        .subscribe(r=>{
             this.data = r[0].question;
             this.setDefaultQuestion();
        });
    }
 
}
setDefaultQuestion(){
    this.questionCategory = this.data[0].category;
    this.question = this.data[0].subCategory[0];
     localStorage.setItem('userName',this.userName);
     localStorage.setItem('Category', this.questionCategory);
     localStorage.setItem('Question', this.question);
  }
  changeQuestion(e:Event)
  {
    let data:any=e;
    let el=(data.path[4]);
    let category = $(el).attr('class');
    this.allInfo = ({userName:this.userName, category:category, question:this.question});
    this.verifyActionResponse.emit(this.allInfo);  

  }
}