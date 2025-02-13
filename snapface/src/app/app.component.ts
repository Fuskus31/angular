import {Component, OnInit} from '@angular/core';
import {FaceSnapComponent} from './face-snap/face-snap.component';
import {FaceSnap} from './models/face-snap';
import {FaceSnapListComponent} from './face-snap-list/face-snap-list.component';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{



}

