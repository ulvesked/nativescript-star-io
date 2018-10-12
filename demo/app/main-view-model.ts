import { Observable } from 'tns-core-modules/data/observable';
import { StarIo } from 'nativescript-star-io';

export class HelloWorldModel extends Observable {
  public message: string;
  private starIo: StarIo;

  constructor() {
    super();

    this.starIo = new StarIo();
    this.message = this.starIo.message;
  }
}
