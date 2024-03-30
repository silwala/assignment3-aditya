import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  dateToday: Date;
  @Input() name: string = "Aditya Silwal";

  constructor() {
    this.dateToday = new Date();
  }
}
