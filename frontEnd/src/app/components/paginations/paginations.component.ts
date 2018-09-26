import { Component, OnInit, Input } from '@angular/core';
import { PaginationsService } from '../../services/paginations.service';
import { Pagination } from '../../models/pagination';

@Component({
  selector: 'app-paginations',
  templateUrl: './paginations.component.html',
  styleUrls: ['./paginations.component.css']
})
export class PaginationsComponent implements OnInit {
  @Input() cantReg;
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
  nextPag() {
    console.log(this.paginationService.nextPage());
  }
  previous() {
    console.log(this.paginationService.previusPage());
  }
}
