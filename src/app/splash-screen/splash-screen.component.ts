import { Component, OnInit } from '@angular/core';
import { fadeOut, movelogo, raiseButton, raiseContent } from '../animations/animations';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  animations: [
    movelogo, raiseContent, fadeOut, raiseButton
  ]
})
export class SplashScreenComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
