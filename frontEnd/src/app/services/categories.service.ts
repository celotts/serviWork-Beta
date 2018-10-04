import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { Categories } from '../models/categories';
import { Pagination } from '../models/pagination';
import { PaginationsService } from './paginations.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
    itemSelect = <any>[];
    count: number;
    totalReg: number;
    nPag: any; // Number page
    selectedCategories = <any> Categories;
    categories: Categories[];
    pagination: Pagination = { // initialize model
      skip: 1,
      limit: 3,
      tRegi: 0
    };
    headers: any;
    readonly URL_API_TREG = 'http://localhost:3000/api/category/tReg';
    readonly URL_API = 'http://localhost:3000/api/category';
    constructor(private http: HttpClient, public paginationService: PaginationsService) {
      this.headers = this.headerHttp();
      this.totalReg = 0;
    }
    headerHttp() {
      return  new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    }
    // Get all category
    getCategories(categories: string) {
        const skip = this.pagination.skip || 1;
        const limit = this.pagination.limit || 10;
        this.headers = this.headerHttp();
        return this.http.get(this.URL_API + `/${categories} /${skip} /${limit}`)
          .subscribe(res => {
            this.categories = res as Categories[];
            this.pagination.tRegi = this.categories.length;
            this.setTotalReg(this.categories.length);
            return categories;
            });
    }
    getTregCategories(categories: string) {
      return this.http.get(this.URL_API_TREG + `/${categories}`)
        .subscribe(res => {
          this.setTotalReg(res);
          this.paginationService.setTotalReg(this.getTotalReg());
          this.paginationService.setpagLimit(this.pagination.limit);
          return this.getCategories(categories);
          });
  }
    // create new category
    postCategories(categories: Categories) {
        console.log('Starts record saving process Categories');
        this.http.post(this.URL_API + `/`, categories)
          .subscribe(res => {
            console.log('Create Register');
            this.getCategories('');
          });
    }
    // update category
    putCategories(categories: Categories) {
        this.http.put(this.URL_API + `/${categories._id}`, categories)
          .subscribe(res => {
            console.log('Update Register');
            this.getCategories('');
          });
    }
    // delete category
    deleteCategories(_id: string) {
        this.http.delete(this.URL_API + `/${_id}`)
          .subscribe(res => {
            console.log('Delete Register');
            this.getCategories('');
          });
    }
    setTotalReg(tReg) {
      this.pagination.tRegi = tReg;
    }
    getTotalReg(): number {
      return this.pagination.tRegi;
    }
}
