import { Component} from 'angular2/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
    <h3>Edit Details:</h3>
    <input [(ngModel)]="keg.type"/>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}
