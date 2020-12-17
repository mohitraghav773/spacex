import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceX Launch Programs';
  developerName = 'Mohit Raghav'

  ngOnInit(){
    //sessionStorage.clear();
  }

}
