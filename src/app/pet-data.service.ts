import { Injectable } from '@angular/core';
import {PetDataJson, PetJson} from "./json-structure";
import {Pet} from "./pet";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  private pets: Pet[] = [];

  constructor(private http: HttpClient) {
  }

  private static imageFolder = 'assets/img/pets/';
  private static dataUri: string = 'assets/data/pet-data.json'

  private static json2Pet(petJson: PetJson): Pet{
    const pet: Pet = new Pet();
    pet.id  = petJson.id;
    pet.name = petJson.name;
    pet.petKind = petJson.petKind;
    pet.age = petJson.age;
    pet.imgSrc = PetDataService.imageFolder + petJson.image;
    return pet;
  }

  public getAllPets(): Observable<Pet[]>{
    return this.http.get<PetDataJson>(PetDataService.dataUri)
      .pipe(
        map(petCatalog => petCatalog.pets
          .map(pet => PetDataService.json2Pet(pet)))
      );
  }

  public getPetById(id: number): Observable<Pet | undefined> {
    return this.getAllPets().pipe(
      switchMap(pets => of(pets.find(pet => pet.id === id)))
    );
  }
}
