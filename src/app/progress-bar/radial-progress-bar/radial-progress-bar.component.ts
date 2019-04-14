import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radial-progress-bar',
  templateUrl: './radial-progress-bar.component.html',
  styleUrls: ['./radial-progress-bar.component.scss']
})
export class RadialProgressBarComponent implements OnInit {

  @Input() score: number = 10;
  @Input() text: string = 'test';
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.score = this.score < 0 ? 0 : this.score > 100 ? 100 : Math.floor(this.score / 10) * 10;
    console.log(this.color);





  }

}
