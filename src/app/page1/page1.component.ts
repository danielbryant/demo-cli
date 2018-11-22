import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../services/dummyData/dummy-data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  holes: Object;

  constructor(private dummyDataService: DummyDataService) {
    
  }

  ngOnInit() {
    //fake a load course data
    this.holes = this.dummyDataService.getCourseData();
  }

}
