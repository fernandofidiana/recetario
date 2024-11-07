import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http=inject(HttpClient);

  
  constructor() { }

  getNationalities() : Observable<{strArea:string}[]>{
    return this.http.get(environment.api.nationalities)
    .pipe(map((res:any) => res.meals));
  }

  getCategories(): Observable<{strCategory:string}[]>{
    return this.http.get(environment.api.categories)
    .pipe(map((res:any) => res.meals));
  }
  getRecipesByCategory(category:string): Observable<{strMeal:string,strMealThumb:string,idMeal:string}[]>{
    return this.http.get(`${environment.api.listByCategory}${category}`)
    .pipe(map((res:any) => res.meals));
  }
  getRecipesByNationality(nation:string): Observable<{strMeal:string,strMealThumb:string,idMeal:string}[]>{
    return this.http.get(`${environment.api.listByNationality}${nation}`)
    .pipe(map((res:any) => res.meals));
  }
  getRecipeById(id:string): Observable<{strMeal:string,strMealThumb:string,idMeal:string}[]>{
    return this.http.get(`${environment.api.viewRecipe}${id}`)
    .pipe(map((res:any) => res.meals));
  }
}
