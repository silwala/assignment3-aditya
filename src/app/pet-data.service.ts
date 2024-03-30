import { Injectable } from '@angular/core';
import {DataJson, PetDataJson, PetJson} from "./json-structure";
import {Pet} from "./pet";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor(private http: HttpClient) {
  }

  private static imageFolder = 'http://localhost:8080/images/pets/';
  private static dataUrl: string = 'http://localhost:8080/api/pets'

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
    return this.http.get<DataJson>(PetDataService.dataUrl)
      .pipe(
        map(data => data._embedded.pets
          .map(pet => PetDataService.json2Pet(pet)))
      );
  }

  public getPetById(id: number): Observable<Pet | undefined> {
    return this.http.get<PetJson>(`${PetDataService.dataUrl}/${id}`)
      .pipe(map(pet => PetDataService.json2Pet(pet))
    );
  }
}
