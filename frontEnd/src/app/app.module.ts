import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { CategoriesGridComponent } from './components/categories/categories-grid.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { CategoriesFormComponent } from './components/categories/categories-form.component';
import { PaginationsComponent } from './components/paginations/paginations.component';
import { PaginationsService } from './services/paginations.service';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoriesGridComponent,
    CategoriesFormComponent,
    PaginationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [CategoriesService, PaginationsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
