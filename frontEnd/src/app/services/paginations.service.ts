import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PaginationsService {
    pag: number;
    totalReg: any;
    pagLimit: any;
    constructor() {
      // Init value
      this.pag = 1;
    }
    nextPage() {
      return this.pag += 1;
    }
    previusPage() {
      if (this.pag > 1) {
        this.pag -= 1;
      } else {
        this.pag = 1;
      }
      return this.pag;
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
    setTotalReg(totalReg) {
      this.totalReg = totalReg;
    }
    getTotalReg() {
      return this.totalReg;
    }
    setpagLimit(pagLimit) {
      this.pagLimit = pagLimit;
    }
    getpagLimit() {
      return this.pagLimit;
    }
    generetePagination() {
      if (this.getpagLimit() === undefined) {
        return;
      }
      if (this.getTotalReg() === undefined) {
        return;
      }
      const tReg = this.getTotalReg();
      let tPag = 1;
      if (tReg > 0 && this.getpagLimit() > 0) {
          tPag = (tReg / this.getpagLimit());
          if (tPag <= 0) {
              let tPag = this.getpagLimit;
              // tslint:disable-next-line:no-shadowed-variable
          }
      }
      const nPags = [];
      console.log(tReg);
      console.log(tPag);
      for (let i = 0; i < tPag; ++i) {
          nPags[i] = i + 1;
      }
      console.log('getPagLimit ' + this.getpagLimit());
      console.log('getTotalReg ' + this.getTotalReg());
      console.log(nPags);
      return nPags;
  }
}
