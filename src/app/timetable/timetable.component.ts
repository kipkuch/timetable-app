import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [ MatGridListModule ],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss'
})
export class TimetableComponent {

}
