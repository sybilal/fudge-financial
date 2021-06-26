import { Component, OnInit } from '@angular/core';
import { fadeOut, hideDashboard, movelogo, raiseButton, raiseContent } from '../animations/animations';
@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css'],
  animations: [
    movelogo, raiseContent, fadeOut, raiseButton, hideDashboard
  ]
})
export class SplashScreenComponent implements OnInit {

  isOpen = false;

  triggerDashboard = true;

  constructor() { }

  ngOnInit(): void {
  }

}
