import { Component,Input,ViewChild } from '@angular/core';

@Component({
    selector: 'lvs-recorder-section',
    templateUrl:'./recorder-content.html',
    styleUrls:['./recorder-content.css']
})

export class RecorderContentComponent
{
    public userName: string;
    public category: string;
    public question: string;
    @Input() userInfo:any;
    @ViewChild('video') video:any; 
    constructor(){}

    ngOnInit()
    {
        this.userName = this.userInfo.userName;
        this.category = this.userInfo.category;
        this.question = this.userInfo.question;
    }
    ngOnChanges()
    {
        this.userName = this.userInfo.userName;
        this.category = this.userInfo.category;
        this.question = this.userInfo.question;
    
    }
    ngAfterViewInit() {
        let _video=this.video.nativeElement;
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true })
                                .then(stream => {
                                  _video.src = window.URL.createObjectURL(stream);
                                  _video.play();
                                })
        }
    }
}