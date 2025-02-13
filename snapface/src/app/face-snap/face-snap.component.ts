import {Component, Input, input, OnInit} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {DatePipe, LowerCasePipe, NgClass, NgStyle, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [NgStyle, NgClass, LowerCasePipe,DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements  OnInit{
  @Input() faceSnap!: FaceSnap;
  AlreadySnap!: boolean;
  textButton: string = 'button1';

  ngOnInit() {
    this.AlreadySnap = false;
  }

  clickBoutton(){
    if(this.AlreadySnap){
      this.textButton = 'button1';
      this.AlreadySnap=false;
      this.faceSnap.onAddSnap();
    }else{
      this.textButton = 'button2';
      this.AlreadySnap=true;
      this.faceSnap.onAddSnap();
    }
  }
}
