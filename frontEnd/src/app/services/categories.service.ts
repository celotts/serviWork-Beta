import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { Categories } from '../models/categories';

/*const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};*/
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  itemSelect = <any>[];
  count: number;
  selectedCategories = <any> Categories;
  categories: Categories[];
  readonly URL_API = 'http://localhost:3000/api/category';
  readonly URL_API_LIKE = 'http://localhost:3000/api/category/like';
  constructor(private http: HttpClient) {}
  // Get all category
  getCategories() {
    return this.http.get(this.URL_API)
    .subscribe(res => {
      this.categories = res as Categories[];
      console.log(res);
    });
  }
  // create new category
  postCategories(categories: Categories) {
    console.log('Starts record saving process Categories');
    this.http.post(this.URL_API + `/`, categories)
    .subscribe(res => {
      this.getCategories();
      console.log(res);
    });
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
  getlikeCategories(categories: string) {
    if (categories === '') {
      this.getQuery(this.URL_API);
    } else {
      this.getQuery(this.URL_API_LIKE + `/${categories}`);
    }
  }
  getQuery(exec) {
    this.http.get(exec)
        .subscribe(res => {
          this.categories = res as Categories[];
          console.log(res);
    });
  }
}
