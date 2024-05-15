import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  constructor(private http: HttpClient) {}

  public getBreedList(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/api/breed');
  }

  public getBreedDetails(breedName: string): Observable<any> {
    breedName = this.handleSpaces(breedName);
    console.log('breed_service.ts breedName:', breedName);
    console.log(
      'breed_service.ts url:',
      `http://localhost:3000/api/breed/${breedName}`
    );
    return this.http.get(`http://localhost:3000/api/breed/${breedName}`);
  }

  private handleSpaces(breedName: string): string {
    return breedName.replace(' ', '%20');
  }
}
