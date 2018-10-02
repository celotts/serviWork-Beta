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
    totalPag: any;
    acumPag: any;
    constructor() {
      // Init value
      this.totalPag = 0;
      this.acumPag = this.limit;
    }
    nextPage() {
      /*if ( this.acumPag < this.tRegi ) {
        return [(this.skip += this.limit), this.limit];
      }*/
    }
    previusPage() {
      /*if (this.skip === this.limit) {
        return this.skip = 0;
      } else if (this.skip > 0) {
        return this.skip -= this.limit;
      } else {
        return this.skip = 0;
      }*/
    }
    initValue(pagination: Pagination) {
     /* if (pagination === undefined) {
        pagination = {
          skip: 20,
          limit: 20,
          tRegi: 0
        };
      }
      this.limit = pagination.limit;
      this.skip = pagination.skip ;
      this.tRegi = pagination.tRegi;*/
    }
}
