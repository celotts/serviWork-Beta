import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  itemSelect = <any>[];
  selectedCategories = <any> Categories;
  categories: Categories[];
  readonly URL_API = 'http://localhost:3000/api/category';
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.URL_API);
  }
  postCategories(categories: Categories) {
    return this.http.post(this.URL_API + `/`, categories);
  }
  putCategories(categories: Categories) {
    return this.http.put(this.URL_API + `/${categories._id}`, categories);
  }
  deleteCategories(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  
}
