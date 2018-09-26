import { Component, OnInit } from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  dataItem = [];
  // Define structure
  categories: Categories = {
    _id : null,
    name : ''
  };
  constructor (public categoriesService: CategoriesService) {}
  ngOnInit() {}
}
