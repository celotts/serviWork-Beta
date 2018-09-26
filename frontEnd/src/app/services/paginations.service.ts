import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PaginationsService {
    limit: any;
    skip: any;
    tRegi: any;
    pagination: Pagination[];
    totalPag: any;
    acumPag: any;
    constructor() {
      // Init value
      this.limit = 20;
      this.skip = 0;
      this.totalPag = 0;
      this.acumPag = this.limit;
    }
    nextPage() {
      if ( this.acumPag < this.tRegi ) {
        return this.skip += this.limit;
      }
    }
    previusPage() {
      if (this.skip === this.limit) {
        return this.skip = 0;
      } else if (this.skip > 0) {
        return this.skip -= this.limit;
      } else {
        return this.skip = 0;
      }
    }
    initValue(pagination: Pagination) {
      this.limit = pagination.limit;
      this.skip = pagination.skip ;
      this.tRegi = pagination.tRegi;
    }
}
