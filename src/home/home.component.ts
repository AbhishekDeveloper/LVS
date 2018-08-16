import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';

@Component({
    selector: 'lvs-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.css']
 
})
export class HomeComponent{
    public option:string = 'recording';
    public title: string = 'SETUP PROFILE/MEMORY(HISTORY)';
    public users: string[]=[];
    public data: any;
    public userInfo:{
    userName: string,
    category: string,
    question: string
    };
    public user : string='--select user--';
    constructor(private homeSrv:HomeService){
        this.userInfo= ({userName:'User A', category:'Demo', question:'Example1'});
    }
    setup()
    {
   this.option = 'setup';
    }

    ngOnInit()
    {
        this.homeSrv.getData()
        .subscribe(r=>{
             this.data = r;
                //UserList
             this.getUsers();
        });
    }
    ngOnchanges()
    {
        this.homeSrv.getData()
        .subscribe(r=>{
             this.data = r;
                //UserList
             this.getUsers();
        });
        this.onverifyAction(this.userInfo);
    }
    onverifyAction(data)
    {
        if(data)
        {
         this.userInfo = data;
         this.option = 'recording';
        }
    }
    getUsers(){
        let i = 0;
        for(let x of this.data)
        {
         this.users[i] = x.user_name;
         i++;
        }
      }
      onUserSelect()
      { this.option = 'recording';
           setTimeout(()=>{
        let userName = localStorage.getItem('userName');
        let category = localStorage.getItem('Category');
        let question =localStorage.getItem('Question');
        this.userInfo =({userName:userName, category: category, question: question});
      },400);
          
       
      }
      doneClicked(){
        this.homeSrv.getData()
        .subscribe(r=>{
             this.data = r;
                //UserList
             this.getUsers();
         location.reload();
        });
       
      }
  
}