import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { HomeService } from '../home.service';
import {
    AbstractControl, FormArray, FormBuilder,NgForm, FormControl,
    FormGroup, Validators
  } from '@angular/forms'
@Component({
   selector:'lvs-setup',
   templateUrl:'./setup.html',
   styleUrls : ['./setup.css']
})

export class SetupComponent implements OnInit
{  public showAddQuestion: boolean =false;
    public first_name: string = '';
    public last_name:  string = '';
    public user_name: string = '';
    public option: string = 'user';
    public inValid: boolean = false;
    public users: string[]=[];
    public questionsList: string[]=[];
    public ngForm: NgForm = null;
    public userExist: boolean = false;
    public question_header: string= '';
    public formValue: any;
    public data:any;
    public errorMsg: string = '';
    public sucessMsg: string = '';
    public questionsData:any[]=[];
    public question:{
        category:string,
        subCategory:any[]
    }
    public postData:{
        first_name: string,
        last_name: string,
        user_name: string,
        question:any[]
    }


    myForm: FormGroup;
    @Output()   afterSaveCall: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private fb: FormBuilder,
        private homeSrv: HomeService
    ){}
   ngOnInit()
   {
 
    this.myForm = this.fb.group({
        items: this.fb.array([])
      });
      this.homeSrv.getData()
      .subscribe(r=>{
           this.data = r;
              //UserList
           this.getUsers();
      });
   
   
     
   
   }
   buildItem(val: string) {
    return new FormGroup({
      question: new FormControl(val, Validators.required)
    })
  }
  getUsers(){
    let i = 0;
    for(let x of this.data)
    {
     this.users[i] = x.user_name;
     i++;
    }
  }
  onUserSubmit()
   {
       if(!this.first_name || !this.last_name || !this.user_name)
       {
           this.inValid = true;
        return
       }  
       else{
      this.inValid = false;
       }
      if(this.users.includes(this.user_name))
      {
          this.userExist = true;
      }
      else
      {
          this.userExist = false;
          this.option = 'question';
      }
  
    }

    addQuestion()
    {
       this.showAddQuestion = true;
  
    }
   
    saveQestions(ngForm:NgForm)
    {   
        if (!ngForm.valid)
        {
         this.errorMsg = 'Please fill Question Headers and questions';
         this.sucessMsg = '';
          return;
        } 
        this.questionsList = [];
        this.formValue = this.myForm.value;
        for(let x of this.formValue.items)
        {
            this.questionsList.push(x.question);

        }
        this.question=({category:this.question_header, subCategory:this.questionsList});
        this.questionsData.push(this.question);
        this.errorMsg = '';
        this.sucessMsg = 'Added sucessfully'
    }
    newQuestion()
    {
        this.question_header = '';
        this.errorMsg = '';
        this.sucessMsg = '';
        this.myForm = this.fb.group({
            items: this.fb.array([])
          });
          this.showAddQuestion = false;
    }
    done()
       {
         this.sucessMsg ='';
         this.errorMsg = '';
         this.postData = ({first_name:this.first_name, last_name:this.last_name, user_name:this.user_name,question:this.questionsData})
         this.homeSrv.postData(this.postData).subscribe(r=>console.log(r));
         this.option = 'device';
         this.afterSaveCall.emit(true);  
       }
 
      }