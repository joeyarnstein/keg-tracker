import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg.component';
import { NewTaskComponent } from './new-keg'

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['fartSalad'],
  directives: [KegComponent, EditKegDetailsComponent, NewTaskComponent],
  templateUrl: 'app/keg-list.component.html'
})
export class KegListerComponent {
  public kegList: Keg[];
  public fartSalad: EventEmitter<Keg>;
  public kegBlueTracker: Keg;
  constructor(){
    this.fartSalad = new EventEmitter();
  }
  thizKegOnChild(clickedKeg: Keg): void {
    console.log(clickedKeg);
    this.kegBlueTracker = clickedKeg;
    this.fartSalad.emit(clickedKeg);
  }
  createNewKeg(userNameOfKeg: string): void {
    this.kegList.push(new Keg(userNameOfKeg, "whatever", this.kegList.length));
  }
}
