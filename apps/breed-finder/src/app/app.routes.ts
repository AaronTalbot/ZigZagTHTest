import { Route } from '@angular/router';
import { OverviewPageComponent } from './overview/overview.page';
import { BreedDetailsComponent } from './breed-details/breed-details.component';
import { NgModule } from '@angular/core';
export const appRoutes: Route[] = [
  { path: '', component: OverviewPageComponent },
  {
    path: 'breed/:name',
    loadChildren: () =>
      import('./breed-details/breed-details.module').then(
        (m) => m.BreedDetailsModule
      ),
  },
];
