import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-linear-progress-bar',
  templateUrl: './linear-progress-bar.component.html',
  styleUrls: ['./linear-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LinearProgressBarComponent implements OnInit {
  @Input() level;
  public higlightLevel = new Array(10);
  constructor() { }

  ngOnInit() {
  
  }
}
