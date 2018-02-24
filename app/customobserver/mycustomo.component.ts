import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import {Mycustomobserver} from './mycustomobserver';
@Component( {
  selector:'my-app',
  template:`<h1>Hello{{name}} <button (click)="createObservable()">créer un observable</button> </h1>`,
})
export class MycustomoComponent{
  name='Habib';
  createObservable(){
    let number=[1,2,3];
    let numbers$=Observable.from(number);
    numbers$.subscribe(new Mycustomobserver());
  }
}
