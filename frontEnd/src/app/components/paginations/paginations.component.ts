import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PaginationsService } from '../../services/paginations.service';
import { Pagination } from '../../models/pagination';

@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.css']
})
export class PaginationsComponent implements OnInit {
    @Input() cantReg;
    @Output() pageNext: EventEmitter<any> = new EventEmitter();
    pagination: Pagination;
    constructor(public paginationService: PaginationsService) {}

    ngOnInit() {
        this.pagination = {
            limit: 20,
            skip: 0,
            tRegi : 100
        };
        this.paginationService.initValue(this.pagination);
    }
    nextPage() {
        this.pageNext.emit(this.paginationService.nextPage());
        // console.log(this.paginationService.nextPage());
    }
    previous() {
        console.log(this.paginationService.previusPage());
    }
}
