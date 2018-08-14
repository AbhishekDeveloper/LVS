import { Component, OnInit } from '@angular/core';
import {
    AbstractControl, FormArray, FormBuilder, FormControl,
    FormGroup, Validators
  } from '@angular/forms'
@Component({
   selector:'lvs-setup',
   templateUrl:'./setup.html',
   styleUrls : ['./setup.css']
})

export class SetupComponent implements OnInit
{  public showAddQuestion: boolean =false;
    public option: string = 'user';
    myForm: FormGroup;
    constructor(
        private fb: FormBuilder
    ){}
   ngOnInit()
   {
    this.myForm = this.fb.group({
        items: this.fb.array([])
      });
   }
   buildItem(val: string) {
    return new FormGroup({
      question: new FormControl(val, Validators.required)
    })
  }
  user()
   {
    this.option = 'question'
    }
    addQuestion()
    {
       this.showAddQuestion = true;
    }
    saveQuestion()
    {
     console.log(this.myForm.value);
    }
    done()
    {
        this.option = 'device';
    }
}