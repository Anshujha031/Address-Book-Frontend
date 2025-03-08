import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-form-page',
  standalone: true,  // ✅ Ensure this is a Standalone Component
  templateUrl: './person-form-page.component.html',
  styleUrls: ['./person-form-page.component.css'],
  imports: [CommonModule, ReactiveFormsModule] // ✅ Ensure ReactiveFormsModule is imported here
})
export class PersonFormPageComponent {

  personForm: FormGroup;
  router: any;

  constructor(private fb: FormBuilder) {
    this.personForm = this.fb.group({
      fullName: [''],
      phoneNumber: [''],
      address: [''],
      city: [''],
      state: [''],
      zipCode: ['']
    });
  }

  resetForm() {
    this.personForm.reset();
  }
  closeForm() {
    this.router.navigate(['/']); // Redirect to the first page
  }
}
