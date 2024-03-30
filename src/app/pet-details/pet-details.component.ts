import { Component } from '@angular/core';
import {Pet} from "../pet";
import {Subscription} from "rxjs";
import {PetDataService} from "../pet-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {

  pet: Pet | undefined;
  private petSub : Subscription | undefined;

  constructor(petDataService : PetDataService, activatedRoute: ActivatedRoute) {

    const idStr: string | null = activatedRoute.snapshot.paramMap.get('id');
    const id: number | null = idStr !== null ? parseInt(idStr) : null;
    if(id !== null){
      this.petSub =
        petDataService.getPetById(id).subscribe(pet => this.pet = pet);
    }
  }

  ngOnDestroy(){
    this.petSub?.unsubscribe();
  }
}
