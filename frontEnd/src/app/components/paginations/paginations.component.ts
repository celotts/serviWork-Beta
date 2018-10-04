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
    nPag: any;
    constructor(public paginationService: PaginationsService, public categoriesService: CategoriesService) {}
    ngOnInit() {}
    nextPage() {
        // const datas = range(1 , 20);
        // console.log(datas);
        // this.pageNext.emit(this.paginationService.nextPage());
        console.log(this.paginationService.nextPage());
    }
    previous() {
        console.log(this.paginationService.previusPage());
    }
}
