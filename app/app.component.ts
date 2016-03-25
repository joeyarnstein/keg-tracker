import { Component, EventEmitter } from 'angular2/core';
import { KegListerComponent } from './keg-list.component';
import { Keg } from './keg.model';


@Component({
  selector: 'my-app',
  directives: [KegListerComponent],
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Brown Swill", "brown ale", 0),
      new Keg("Light Swill", "water-y crap ale", 1)
    ];
  }
  editMode(clickedKeg: Keg): void {
    console.log("now in edit mode");
  }
}
