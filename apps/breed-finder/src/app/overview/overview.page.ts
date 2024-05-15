import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // Import RouterModule and Router
import { Store } from '@ngrx/store';
import { getBreedList } from '../state/breeds/breed.actions';
import { breedReducer } from '../state/breeds/breed.reducer';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe, RouterModule, CommonModule],
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['overview.page.scss'],
})
export class OverviewPageComponent implements OnInit {
  breedList$: Observable<string[]> = this.store.select(
    breedReducer.selectBreedList
  );

  constructor(private store: Store, private router: Router) {} // Inject Router

  ngOnInit() {
    this.store.dispatch(getBreedList());
  }

  viewDetails(breedName: string) {
    console.log('View details for breed:', breedName);
    this.router.navigate(['/breed', breedName]); // Navigate to breed details
  }
}
