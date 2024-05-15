import { Controller, Get, Param } from '@nestjs/common';

import { BreedService } from './breed.service';
import { Breed } from './breed.model';

@Controller('breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  @Get()
  getBreeds(): string[] {
    return this.breedService.getAllBreeds();
  }

  @Get(':name')
  getBreedDetails(@Param('name') breedName: string) {
    return this.breedService.getBreedDetails(breedName);
  }
}
