import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { NgForm } from '@angular/forms';
import { CategoriesFormComponent } from '../categories/categories-form.component';
import { Pagination } from '../../models/pagination';
import { PaginationsService } from '../../services/paginations.service';
@Component({
    selector: 'app-categories-grid',
    templateUrl: './categories-grid/categories-grid.html',
    styleUrls: ['./categories.component.css'],
})
export class CategoriesGridComponent implements OnInit {
    // Define decorator for two component communication
    @ViewChild(CategoriesFormComponent) formCateg: CategoriesFormComponent;
    // Declares the var count the amount of record in the table
    count = 0;
    // Number pag
    nPag: any;
    // Define struct data
    categories: Categories = {
        _id : null,
        name : '',
        length: 0
    };
    pagination: Pagination;
    constructor(public categoriesService: CategoriesService, public paginationService: PaginationsService) {
        // Assign new model class the categories
        this.categoriesService.selectedCategories = new Categories();
        // Search all categories
        this.pagination = {
            skip: 1,
            limit: 10,
            tRegi: 0
        };
    }
    ngOnInit() {
        // Call the function to the obtain all category records
        this.getCategories();
    }
    /**
    * ----------------------------------------------
    * Comunication to other component
    */
    selecciona(categories: any) {
        // Select and send the item to another function of another component
        this.formCateg.recibeItem(categories);
    }
    /**
    * ----------------------------------------------
  */
    delete(categories: any) {
        // Select and send the item to another function of another component
        this.categoriesService.deleteCategories(categories._id);
    }
    addCategories(form: NgForm) {
        // Add new categories
        if (form.value._id == null) {
            this.categoriesService.postCategories(form.value);
        }
        if (form.value._id != null ) {
            this.categoriesService.putCategories(form.value);
            form.value._id = null;
        }
    }
    getCategories() {
        this.categoriesService.getTregCategories(this.categoriesService.getNameCategory());
    }
    resetForm(form?: NgForm) {
        // Reset Form
        form.reset();
        this.categoriesService.selectedCategories = new Categories();
    }
    editCategories(categories: Categories) {
        // Assign the item to edit the categories
        this.categories = categories;
    }
    goNextPage(nreg) {
     //   this.formCateg.pageNexts(nreg);
    }
    goPages() {
        this.getCategories();
    }
}
