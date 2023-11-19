import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-date',
  templateUrl: './single-date.component.html',
  styleUrls: ['./single-date.component.css']
})
export class SingleDateComponent {
    @Input() dateText: string = '';
}
