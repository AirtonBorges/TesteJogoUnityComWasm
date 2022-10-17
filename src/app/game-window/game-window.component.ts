import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.scss']
})
export class GameWindowComponent implements AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    
  }

  private onSuccess() {
    console.log('funcionou');
  }

  private onError() {
    console.log('não funcionou');
  }
}
