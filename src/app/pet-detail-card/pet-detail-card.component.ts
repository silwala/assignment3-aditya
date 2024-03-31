import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pet-detail-card',
  templateUrl: './pet-detail-card.component.html',
  styleUrl: './pet-detail-card.component.css'
})
export class PetDetailCardComponent {
  @Input() imgSrc = '';
  @Input() name = '';
  @Input() petType = '';
  @Input() age = 0;
}
