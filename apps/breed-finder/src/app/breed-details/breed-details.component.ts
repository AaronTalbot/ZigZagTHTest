import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreedService } from '../state/breeds/breed.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.scss'],
})
export class BreedDetailsComponent implements OnInit {
  breed$: Observable<any> | undefined;

  constructor(
    private route: ActivatedRoute,
    private breedService: BreedService
  ) {}

  ngOnInit(): void {
    const breedName = this.route.snapshot.paramMap.get('name');
    if (breedName) {
      this.breed$ = this.breedService.getBreedDetails(breedName);
    }
  }
}
