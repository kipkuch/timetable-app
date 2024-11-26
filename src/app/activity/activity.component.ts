import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  description:String;
  start:String;
  duration:Number;

  constructor(description:String, start:String, duration:Number) {
    this.description = description;
    this.start = start;
    this.duration = duration;
  }
}
