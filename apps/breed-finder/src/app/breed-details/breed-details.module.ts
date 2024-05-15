import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { BreedDetailsComponent } from './breed-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreedDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BreedDetailsComponent }]),
  ],
  exports: [BreedDetailsComponent],
})
export class BreedDetailsModule {}
