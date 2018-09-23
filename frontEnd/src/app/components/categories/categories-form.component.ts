import { Component, OnInit, Input} from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form/categories-form.html'
})
export class CategoriesFormComponent implements OnInit {
  @Input() dataItem;
  registerForm: FormGroup;
  submitted = false;
  categories: Categories = {
    _id : null,
    name : ''
  };  constructor(private categoriesService: CategoriesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      _id: [''],
      categoriName: ['', Validators.required]
  });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
      this.registerForm.reset();
  }
  submitForm(): void {
  }

  onCategory(categoriesData: any) {
    this.categories = categoriesData;
  }
  change(data: any) {
    console.log(data);
    this.registerForm = this.formBuilder.group({
      catgoriName: data
    });
  }
  log(name) {
    console.log('aquiiii' + name);
  }

}
