import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpParams } from '@angular/common/http';
import { Categories } from '../models/categories';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
    itemSelect = <any>[];
    count: number;
    totalReg: number;
    selectedCategories = <any> Categories;
    categories: Categories[];
    pagination: Pagination = { // initialize model
      skip: 1,
      limit: 10,
      tRegi: 0
    };
    headers: any;
    readonly URL_API = 'http://localhost:3000/api/category';
    constructor(private http: HttpClient) {
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
            this.totalReg = this.categories.length;
            this.setTotalReg(this.categories.length);
            console.log(this.categories);
            return categories;
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
    generetePagination() {
      const tReg = this.getTotalReg();
      let tPag = 1;
      if (tReg > 0 && this.pagination.limit > 0) {
          tPag = (tReg / this.pagination.limit);
          if (tPag <= 0) {
              tPag = 10;
              // tslint:disable-next-line:no-shadowed-variable
          }
      }
      const nPag = [];
      for (let i = 0; i < tPag; ++i) {
          nPag[i] = i + 1;
      }
      return nPag;
  }
}
