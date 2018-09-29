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
    selectedCategories = <any> Categories;
    categories: Categories[];
    pagination: Pagination;
    headers: any;
    readonly URL_API = 'http://localhost:3000/api/category';
    constructor(private http: HttpClient) {
      this.headers = this.headerHttp();
    }
    headerHttp() {
      return  new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
    }
    // Get all category
    getCategories(categories: string) {
        if (this.pagination === undefined) {
          this.pagination = {
            skip: 1,
            limit: 10,
            tRegi: 0
          };
        }
        const skip = this.pagination.skip;
        const limit = this.pagination.limit;
        this.headers = this.headerHttp();
        return this.http.get(this.URL_API + `/${categories} /${skip} /${limit}`)
          .subscribe(res => {
            this.categories = res as Categories[];
            console.log('Execute the conulta');
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
}
