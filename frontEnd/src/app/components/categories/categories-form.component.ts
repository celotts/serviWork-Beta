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
    errorManual = false;
    constructor(private categoriesService: CategoriesService, private formBuilder: FormBuilder) { }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            _id: [''],
            categoryName: ['', Validators.required]
        });
    }
    
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
 
    onSubmit() {
        this.submitted = true;
        this.errorManual = false;

        console.log(this.registerForm.controls.categoryName);

        if(this.registerForm.controls.categoryName.value == ''){
          console.log('vacio');
          this.errorManual = true;
          return;
        }
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
 
        alert('SUCCESS!! :-)')
    }

    recibeItem(item){
      this.registerForm = this.formBuilder.group({
        _id: [item._id],
        categoryName: [item.name]
    });
    }
}