import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';

@Component({
    selector: 'lvs-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.css']
 
})
export class HomeComponent{
    public option:string;
    public title: string = 'SETUP PROFILE/MEMORY(HISTORY)';
    setup()
    {
   this.option = 'setup';
    }
}