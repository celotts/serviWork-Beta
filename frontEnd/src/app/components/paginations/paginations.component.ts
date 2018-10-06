import { Component, OnInit, Input, EventEmitter, Output, AfterContentInit } from '@angular/core';
import { PaginationsService } from '../../services/paginations.service';
import { Pagination } from '../../models/pagination';
import { CategoriesService } from '../../services/categories.service';



@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.css']
})
export class PaginationsComponent implements OnInit {
    @Input() cantReg;
    @Input() limit;
    @Input() tReg;
    @Output() pageNext: EventEmitter<any> = new EventEmitter();
    @Output() previou: EventEmitter<any> = new EventEmitter();
    @Output() page: EventEmitter<any> = new EventEmitter();
    nPag: any;
    activePage: any;
    constructor(public paginationService: PaginationsService, public categoriesService: CategoriesService) {}
    ngOnInit() {}
    nextPage() {
        // this.paginationService.nextPage();
        this.page.emit(this.activePage = this.paginationService.nextPage());
        console.log(this.activePage);
    }
    previous() {
        this.page.emit(this.activePage = this.paginationService.previusPage());
    }
    pages(nPag) {
        this.page.emit(this.paginationService.pages(nPag));
        this.activePage = nPag;
    }
}
