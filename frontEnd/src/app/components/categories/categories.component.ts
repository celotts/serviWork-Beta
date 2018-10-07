import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Categories } from '../../models/categories';
import { CategoriesService } from '../../services/categories.service';
import { NgForm } from '@angular/forms';
import { PaginationsService } from '../../services/paginations.service';


@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class CategoriesComponent implements OnInit {
    dataItem = [];
    // Define structure
    categories: Categories = {
        _id : null,
        name : '',
        length: 0
    };
    constructor (public categoriesService: CategoriesService, public paginationService: PaginationsService) {}
    ngOnInit() {}
}
