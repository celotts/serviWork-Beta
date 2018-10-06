import { Injectable } from '@angular/core';
import { Pagination } from '../models/pagination';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PaginationsService {
    // Var Pagination
    nPags: any; // Page generate
    totalReg: any; // Total Reg x consult
    totalBtn: any; // Total Btn
    totalBtnGene: any; // Total Btn generate
    typeBtn: any;
    advance: any;
    iAux: any;
    activePage: any;
    // --------
    pag: number;
    numberPag: any;
    skip: number;
    pagLimit: any;
    constructor() {
        // Init value
        this.pag = 1;
    }
    nextPage() {
        this.pages(this.skip += 1);
        this.generetePagination();
        return (this.skip);
    }
    previusPage() {
      console.log(this.skip);
        if (this.skip > 1) {
          this.skip -= 1;
        } else {
          this.skip = 1;
        }
        this.pages(this.skip);
        this.generetePagination();
        return (this.skip);
    }
    pages(nPags) {
        this.setSkip(nPags);
    }
    setSkip(skip) {
        this.skip = skip;
    }
    getSkip() {
        return this.skip;
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
    genereteTotalBtn() {
      if (this.totalReg > 0 && this.pagLimit > 0) {
        if ((this.totalReg / this.getpagLimit()) <= 0) {
          return 1;
        } else {
          if (((this.totalReg / this.getpagLimit()) - Math.trunc(this.totalReg / this.getpagLimit())) > 0 ) {
            return ((this.totalReg / this.getpagLimit()) + 1);
          }
          return (this.totalReg / this.getpagLimit());
        }
      }
    }
    generetePagination() {
        this.nPags = []; // Declare Array
        this.totalBtn = this.genereteTotalBtn(); // Calculate total Btn
        this.setNumberPag(this.nPags); // Capture numbr page
        this.typeBtn = this.getSkip(); // get type btn
        this.iAux = 0; // Declare var aux
        if (this.totalBtnGene === undefined ) {  // valid is undefined
            this.totalBtnGene = 0; // initialize in 0
        }
        if (this.advance === undefined) { // valid is undefined
            this.advance = 0; // initialize in 0
        }
        if (this.typeBtn === '<') { // If type btn in same <
            if ((this.advance -= 1) < 0) { // If advance is < 0 initialize in 1
              this.advance = 1; // initialize in 1
            }
        } else if (this.typeBtn === '>') { // If type btn in same >
            this.advance += 1; // Increase in 1
        }
        this.iAux = 0; // Define in 0
        for (let i = 0; i < 5; i++) {  // cycle for
            if (this.advance === 0  && (this.totalBtn - 1) > i) { // valid advance
                this.nPags[i] = i + 1; // assign to the array
            } else {
                if (this.advance > 0 && i === 0) { // valid if advance > 0 and i same 0
                    this.nPags[0] = '<'; // assign position 0 value <
                    this.iAux = 1; // assign 1 to var iAux
                }
                if ( this.totalBtn > i && i > 0) { // valid totalBtn  greater than i and i greater than 0
                    if (this.advance > 0) { // valid advance greater than 0
                      this.nPags[i] = i + (this.advance + 1); // assign position i value of the page
                    }
                }
            }
            this.iAux = i; // assign i into var iAux
        }
        if ((this.nPags[this.nPags.length - 1]) <= (this.totalBtn - 1)) { // Valid is the last value is smaller than totalBtn
            this.nPags[this.iAux + 1] = '>'; // assign > into var i Aux
        }
    }
    setNumberPag(nPage: any) {
        this.numberPag = nPage;
    }
    getNumberPag() {
        return this.numberPag;
    }
}
