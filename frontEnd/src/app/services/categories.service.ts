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
  readonly URL_API_LIKE = 'http://localhost:3000/api/category/like';
  constructor(private http: HttpClient) {}
  // Get all category
  getCategories() {
    return this.http.get(this.URL_API);
  }
  // create new category
  postCategories(categories: Categories) {
    return this.http.post(this.URL_API + `/`, categories);
  }
  // update category
  putCategories(categories: Categories) {
    return this.http.put(this.URL_API + `/${categories._id}`, categories);
  }
  // delete category
  deleteCategories(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
  // Get all category
  getlikeCategories(categories: Categories) {
    return this.http.get(this.URL_API_LIKE + `/${categories.name}`);
  }
}
