import { Injectable } from '@angular/core';
import {FaceSnap} from '../models/face-snap';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
    'Archibald',
    'Mon meilleur ami depuis tout petit !',
    'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    new Date(),
    0
  ),
  new FaceSnap(
  'to the moutain',
  'Jadore les fromages',
  'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
  new Date(),
  1
 ).withLocation('à la montagne')
  ]

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
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
