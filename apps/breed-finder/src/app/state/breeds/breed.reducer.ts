import { createFeature, createReducer, on } from '@ngrx/store';
import { BreedState } from './breed.model';
import { getBreedDetailsSuccess, getBreedListSuccess } from './breed.actions';
import { BreedDetails } from './breed-details.model';

export const initialBreedState: BreedState = {
  breedList: [],
};

export const initialBreedDetailsState: BreedDetails = {
  id: 0,
  name: '',
  description: '',
  origin: '',
  temperament: '',
  lifeSpan: '',
  imageUrl: '',
};

export const breedReducer = createFeature({
  name: 'breedState',
  reducer: createReducer(
    initialBreedState,
    on(getBreedListSuccess, (state, { breeds }) => {
      return {
        ...state,
        breedList: breeds,
      };
    })
  ),
});

export const breedDetailsReducer = createFeature({
  name: 'breedDetailsState',
  reducer: createReducer(
    initialBreedDetailsState,
    on(getBreedDetailsSuccess, (state, { breed }) => {
      return {
        ...state,
        breed: breed,
      };
    })
  ),
});
