import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { QuestionHeaderComponent } from './question-header/question-header.component';
import { SetupComponent } from './setup/setup.component';
import { RecorderContentComponent } from './recorder-container/recorder-content.component';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    RadioButtonModule,
    TriStateCheckboxModule
  ],
  declarations: [
    HomeComponent,
    QuestionHeaderComponent,
    SetupComponent,
    RecorderContentComponent
  ],
  exports: [ 
    HomeComponent,

  ],
  providers: [
    HomeService
  ]
})
export class HomeModule {}