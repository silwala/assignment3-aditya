import { Component } from '@angular/core';
import {Pet} from "../pet";
import {PetDataService} from "../pet-data.service";

@Component({
  selector: 'app-pet-index',
  templateUrl: './pet-index.component.html',
  styleUrl: './pet-index.component.css'
})
export class PetIndexComponent {

  pets: Pet[];

  constructor(petDataService: PetDataService) {
    this.pets = petDataService.getPetList();
  }

}
