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
    nameCategory: any;
    pagination: Pagination = { // initialize model
      skip: 1,
      limit: 4,
      tRegi: 0
    };
    headers: any;
    readonly URL_API_TREG = 'http://localhost:3000/api/category/tReg';
    readonly URL_API = 'http://localhost:3000/api/category';
    constructor(private http: HttpClient, public paginationService: PaginationsService) {
      this.headers = this.headerHttp();
      this.totalReg = 0;
      this.setNameCategory('');
    }
    headerHttp() {
      return  new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    }
    // Get all category
    getCategories(categories: string) {
        const skip = this.paginationService.getSkip() || 1;
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
      return this.http.get(this.URL_API_TREG + `/${this.getNameCategory()}`)
        .subscribe(res => {
          this.setTotalReg(res);
          this.paginationService.setTotalReg(this.getTotalReg());
          this.paginationService.setpagLimit(this.pagination.limit);
          this.paginationService.generetePagination();
          return this.getCategories(categories);
          });
  }
    // create new category
    postCategories(categories: Categories) {
        console.log('Starts record saving process Categories');
        this.http.post(this.URL_API + `/`, categories)
          .subscribe(res => {
            console.log('Create Register');
            this.getTregCategories('');
          });
    }
    // update category
    putCategories(categories: Categories) {
        this.http.put(this.URL_API + `/${categories._id}`, categories)
          .subscribe(res => {
            console.log('Update Register');
            this.getTregCategories('');
          });
    }
    // delete category
    deleteCategories(_id: string) {
        this.http.delete(this.URL_API + `/${_id}`)
          .subscribe(res => {
            console.log('Delete Register');
            this.getTregCategories('');
          });
    }
    setTotalReg(tReg) {
      this.pagination.tRegi = tReg;
    }
    getTotalReg(): number {
      return this.pagination.tRegi;
    }
    getSkip() {
      return this.paginationService.getSkip();
    }

    setNameCategory(name: any) {
      this.nameCategory = name;
    }
    getNameCategory() {
      return this.nameCategory;
    }
}
