import { Injectable } from '@angular/core';
import {PetJson} from "./json-structure";
import {Pet} from "./pet";
import {petsCatalog} from "./pet-data";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  private pets: Pet[] = [];

  constructor() {

    petsCatalog.pets.forEach(
      (petJson : PetJson) => this.pets.push(PetDataService.json2Pet((petJson)))
    );

  }

  private static imageFolder = 'assets/img/pets/';

  private static json2Pet(petJson: PetJson): Pet{
    const pet: Pet = new Pet();
    pet.id  = petJson.id;
    pet.name = petJson.name;
    pet.petKind = petJson.petKind;
    pet.age = petJson.age;
    pet.imgSrc = PetDataService.imageFolder + petJson.image;
    return pet;
  }

  public getPetList(): Pet[]{
    return this.pets;
  }

  public getPetById(id: number): Pet | undefined {
    return this.pets.find(pet => pet.id === id);
  }
}
