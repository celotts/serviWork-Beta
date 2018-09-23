import { Component, OnInit, ViewChild } from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { NgForm } from '@angular/forms';
import { CategoriesFormComponent } from '../categories/categories-form.component'; 

@Component({
  selector: 'app-categories-grid',
  templateUrl: './categories-grid/categories-grid.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesGridComponent implements OnInit {
  @ViewChild(CategoriesFormComponent) formCateg: CategoriesFormComponent;

  count = 0;
  constructor(public categoriesService: CategoriesService) {
    this.categoriesService.selectedCategories = new Categories();
   }
  categories: Categories = {
    _id : null,
    name : ''
  };
  ngOnInit() {
    this.getCategories();
  }
  selecciona(categories: any) {
   // this.Datacategory.emit(categories);
    this.formCateg.recibeItem(categories);
  }
  addCategories(form: NgForm) {
    if (form.value._id == null) {
      this.categoriesService.postCategories(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getCategories();
          console.log(res);
        });
    }
    if (form.value._id != null ) {
      this.categoriesService.putCategories(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getCategories();
          console.log(res);
        });
    }
    form.value._id = null;
  }
  getCategories() {
    this.categoriesService.getCategories()
      .subscribe(res => {
        this.categoriesService.categories = res as Categories[];
        this.cantReg(this.categoriesService.categories);
        console.log(res);
      });
  }
  cantReg(data) {
    this.count = data.length;
  }
  resetForm(form?: NgForm) {
     form.reset();
      this.categoriesService.selectedCategories = new Categories();
  }
  editCategories(categories: Categories) {
    this.categories = categories;
  }
  deleteEmployee(categories: Categories) {
    this.categoriesService.deleteCategories(categories._id)
    .subscribe(res => {
      this.getCategories();
      console.log(res);
    });
  }
}
