import { Injectable } from '@angular/core';

@Injectable()
export class LocalCounterService {
  counter = 0

  increas() {
    this.counter++
  }

  decrease() {
    this.counter--
  }
}
