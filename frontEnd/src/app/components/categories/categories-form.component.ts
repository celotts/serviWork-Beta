import { Component, OnInit, ViewChild} from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-categories-form',
    templateUrl: './categories-form/categories-form.html'
})
export class CategoriesFormComponent implements OnInit {
    registerForm: FormGroup;
    state: String;
    color: String;
    color_default: string;
    loading: boolean;
    count: number;
    submitted = false;
    errorManual = false;
    categories = <any>[];
    constructor(private categoriesService: CategoriesService, private formBuilder: FormBuilder) { }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            _id: [''],
            categoryName: ['', Validators.required]
        });
        this.color_default = '#1B3D97';
        this.loading = false;
        this.state = ' (Nuevo) ';
        this.color = this.color_default;
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }
    // Send to save
    onSubmit() {
        this.submitted = true;
        this.errorManual = false;

        console.log(this.registerForm.controls.categoryName);
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
    }
    search() {
        this.state = ' (Buscar) ';
        this.color = '#229954';
        this.categoriesService.getlikeCategories(this.registerForm.controls.categoryName.value);
        this.categories = {
            _id: this.registerForm.value._id,
            name: this.registerForm.value.categoryName
        };
        // tslint:disable-next-line:quotemark
        this.categoriesService.putCategories(this.categories);
    }
    reset() {
        this.registerForm = this.formBuilder.group({
            _id: [''],
            categoryName: ['', Validators.required]
        });
        this.search();
        this.state = ' (Nuevo) ';
        this.color = this.color_default;
    }
}
