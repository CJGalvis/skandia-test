import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-text-medium",
  templateUrl: "./text-medium.component.html",
  styleUrls: ["./text-medium.component.scss"],
})
export class TextMediumComponent implements OnInit {
  @Input() value: string = "";

  constructor() {}

  ngOnInit(): void {}
}
