import { Component, OnInit, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-linear-progress-bar",
  templateUrl: "./linear-progress-bar.component.html",
  styleUrls: ["./linear-progress-bar.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LinearProgressBarComponent implements OnInit {
  @Input() score: number = 0; // out of 10
  @Input() shape: "dot" | "bar" = "dot";
  @Input() showEmpty: boolean = true; // show empty or unfilled bars
  @Input() styles?: object;

  filledColor: string = "red";
  @Input()
  set color(color: string) {
    this.filledColor = color || "red";
  }

  public totalScore = new Array(10);

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.score = Math.floor(this.score);
  }
}
