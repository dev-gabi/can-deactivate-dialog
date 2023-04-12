import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private person = { id: 1, name: 'jim', age: 25 }

  getPerson()
  {
    return of({ ...this.person });
  }
  update(person: { id: number, name: string, age: number })
  {
    this.person = person;
  }
}
