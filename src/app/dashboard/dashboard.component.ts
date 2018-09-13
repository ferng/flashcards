import { Component, OnInit } from '@angular/core';

import { ButtonService } from '../button.service';
import { Button } from '../button';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  faceButtons: Button[];
  cardButtons: Button[];

  constructor(private buttonService: ButtonService) { }
  
  ngOnInit() { 
    this.loadButtons()
  }

  loadButtons() {
    this.faceButtons = this.buttonService.getButtons('face');
    this.cardButtons = this.buttonService.getButtons('card');
  }
}
