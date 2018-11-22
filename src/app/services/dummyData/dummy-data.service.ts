import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService {
  private course1 = [
    {holeNumber: 1, holePar: 4 },
    {holeNumber: 2, holePar: 5 },
    {holeNumber: 3, holePar: 4 },
    {holeNumber: 4, holePar: 3 },
    {holeNumber: 5, holePar: 5 },
    {holeNumber: 6, holePar: 4 },
    {holeNumber: 7, holePar: 4 },
    {holeNumber: 8, holePar: 3 },
    {holeNumber: 9, holePar: 4 }
  ]

  constructor() { }

  getSomeData() {
    return "this is some data";
  }

  getCourseData() {
    return this.course1;
  }

}
