import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { EntryComponent } from '../entry/entry.component';
import data from '../resources/timetable.json';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [ MatGridListModule ],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss'
})
export class TimetableComponent {
  timetable = data;
  rows:Array<TtActivity[]> = this.splitIntoRows();
  
  splitIntoRows(): TtActivity[][] {

    const activitiesMax:number = Object
    .values(this.timetable)
    .reduce(
      (max,col) => Math.max(max, col.activities.length), 0
    )

    let rows:Array<TtActivity[]> = [];
    for(let i = 0; i < activitiesMax; i++) {
      let row:Array<TtActivity> = [];
      for(let day of this.timetable) {
        let activity:TtActivity | undefined = day.activities[i];
        if(activity) {
          row.push(activity);
        }
      }

      rows.push(row);
    }
    return rows;
  }
}

interface TtActivity {
  description: string,
  start: string,
  duration: number;
}


