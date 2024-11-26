import { Component } from '@angular/core';
import { ActivityComponent } from '../activity/activity.component';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [],
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class EntryComponent {
  day:string;
  activities:Array<ActivityComponent> = [];

  constructor(day:String) {
    this.day = day.toString();
  }
}
