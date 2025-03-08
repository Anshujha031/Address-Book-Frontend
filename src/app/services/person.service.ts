import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private persons: Person[] = [
    {
      id: 1, name: 'John Doe', phone: '123-456-7890', address: 'New York',
      zip: undefined,
      state: undefined,
      city: undefined
    },
    {
      id: 2, name: 'Jane Smith', phone: '987-654-3210', address: 'New York',
      zip: undefined,
      state: undefined,
      city: undefined
    }
  ];

  getPersons(): Observable<Person[]> {
    return of(this.persons);
  }

  getPersonById(id: number): Observable<Person | undefined> {
    return of(this.persons.find(person => person.id === id));
  }

  addPerson(person: Person): void {
    person.id = this.persons.length + 1;
    this.persons.push(person);
  }

  updatePerson(updatedPerson: Person): void {
    const index = this.persons.findIndex(p => p.id === updatedPerson.id);
    if (index !== -1) this.persons[index] = updatedPerson;
  }

  deletePerson(id: number): void {
    this.persons = this.persons.filter(person => person.id !== id);
  }
}
