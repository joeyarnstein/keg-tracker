import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <h3>{{ keg.name }}</h3>
  `
})
export class KegComponent {
  public keg: Keg;
}

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['fartSalad'],
  template:
  `
    <h3 *ngFor="#currentKeg of kegList"
      (click)="thizKegOnChild(currentKeg)"
      [class.selected]="currentKeg === kegBlueTracker">
      {{currentKeg.name}}
    </h3>
  `
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
}

@Component({
  selector: 'my-app',
  directives: [KegListerComponent],
  template: `
    <div class="jumbotron container">
      <h1>On Tap</h1>
      <keg-list
        [kegList]="kegs"
        (fartSalad)="thizKeg($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];
  constructor(){
    this.kegs = [
      new Keg("Brown Swill", "brown ale", 0),
      new Keg("Light Swill", "brown ale", 1)
    ];
  }
  thizKeg(clickedKeg: Keg): void {
    if (clickedKeg === this.kegs[0]){
      console.log("Nailed it")
      console.log(clickedKeg);
    } else {
      alert("Not so much");
      console.log(clickedKeg);
      console.log(this.kegs[0]);
    }
  }
}

export class Keg {
  public empty: boolean = false;
  public poursleft: number = 124;
  constructor(public name: string, public type: string, public id: number){

  }
}
