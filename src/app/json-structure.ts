export interface PetJson {
  id: number
  name: string
  petKind: string
  age: number
  image: string
}

export interface PetDataJson{
  pets: PetJson[];
}