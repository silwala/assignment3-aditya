import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pet-cards',
  templateUrl: './pet-cards.component.html',
  styleUrl: './pet-cards.component.css'
})
export class PetCardsComponent {

  @Input() routePet : any;
  @Input() imgSrc = '';
  @Input() name = '';
  @Input() petType = '';
}
