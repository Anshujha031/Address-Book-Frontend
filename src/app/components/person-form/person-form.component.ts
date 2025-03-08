import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  // ✅ Fix: Import ReactiveFormsModule
  templateUrl: './person-form.component.html',
})
export class PersonFormComponent {
  personForm: FormGroup;


  constructor(private fb: FormBuilder, 
    private router: Router) {
    this.personForm = this.fb.group({
      name: [''],
      phone: [''],
      address: ['']
    });
  }
 
  savePerson(): void {
    console.log('Person saved:', this.personForm.value);

  }
}
