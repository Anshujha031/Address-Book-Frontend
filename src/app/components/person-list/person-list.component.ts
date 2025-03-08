import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';


@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent{
 persons: Person[] = [];
  

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersons().subscribe(data => this.persons = data);
  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id);
    this.persons = this.persons.filter(person => person.id !== id);
  }
}
