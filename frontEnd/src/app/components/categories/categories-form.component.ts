import { Component, OnInit, ViewChild} from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pagination } from '../../models/pagination';
@Component({
    selector: 'app-categories-form',
    templateUrl: './categories-form/categories-form.html',
})
export class CategoriesFormComponent implements OnInit {
    registerForm: FormGroup;
    state: String;
    color: String;
    color_default: string;
    loading: boolean;
    errorSave: boolean;
    count: number;
    submitted = false;
    errorManual = false;
    categories = <any>[];
    pagination: Pagination;
    limit = 10; // Default
    skip: 1; // Default
    constructor(private categoriesService: CategoriesService, private formBuilder: FormBuilder) { }
    ngOnInit() {
        const var1 = this.categoriesService.getTotalReg();
        console.log( ' form ' +  var1);
        this.registerForm = this.formBuilder.group({
            _id: [''],
            categoryName: ['', Validators.required]
        });
        this.color_default = '#1B3D97';
        this.loading = false;
        this.state = ' (Nuevo) ';
        this.color = this.color_default;
        this.errorSave = false; // Hide or save message
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }
    checkSave() {
        if (this.state !== ' (Editar) ' && this.state !== ' (Nuevo) ') {
            // Can not save
            return true;
        }
        // It can be saved
        return false;
    }
    // Send to save
    onSubmit() {
        this.submitted = true;
        this.errorManual = false;
        this.errorSave = false;
        if (this.checkSave) {
            // Can not save
            this.errorSave = true;
        }
        if (this.registerForm.controls.categoryName.value === '') {
            this.errorManual = true;
            this.reset();
            return;
        }
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.categories = {
            _id: this.registerForm.value._id,
            name: this.registerForm.value.categoryName
        };
        // tslint:disable-next-line:quotemark
        if (this.state === " (Nuevo) ") {
            this.categoriesService.postCategories(this.categories);
            this.reset();
        }
        if (this.state === ' (Editar) ') {
            this.categoriesService.putCategories(this.categories);
        }
    }
    recibeItem(item) {
        this.state = ' (Editar) ';
        this.color = '#73C6B6';
        this.registerForm = this.formBuilder.group({
            _id: [item._id],
            categoryName: [item.name]
        });
        this.errorSave = false; // Hide or save message
    }
    search() {
        this.state = ' (Buscar) ';
        this.color = '#229954';
        this.categoriesService.getCategories(this.registerForm.controls.categoryName.value.trim());
        this.categories = {
            _id: this.registerForm.value._id,
            name: this.registerForm.value.categoryName.trim()
        };
        // tslint:disable-next-line:quotemark
        // this.categoriesService.getlikeCategories(this.categories.name);
        this.errorSave = false; // Hide or save message
    }
    reset() {
        this.registerForm = this.formBuilder.group({
            _id: [''],
            categoryName: ['', Validators.required]
        });
        this.search();
        this.state = ' (Nuevo) ';
        this.color = this.color_default;
        this.errorSave = false; // Hide or save message
    }
    pageNexts(value) {}
}
