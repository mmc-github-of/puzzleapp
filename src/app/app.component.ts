import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Puzzule App';

  x1: number;
  x2: number;
  y1: number;
  y2: number;

  x1y1: number;
  x2y2: number;
  x1x2: number;
  y1y2: number;

  ngOnInit(): void {
    this.x1x2 = this.x2y2 = this.x1y1 = this.y1y2 = 0;
    this.x1 = this.x2 = this.y1 = this.y2 = 0;
  }
   
  calculateData() {
    this.y1 = (this.x1y1 + this.x2y2 + this.y1y2 - this.x1x2) / 2;
    this.y2 = this.y1y2 - this.y1;
    this.x1 = this.x1y1-this.y1;
    this.x2 = this.x2y2 + this.y2;
  }
}
