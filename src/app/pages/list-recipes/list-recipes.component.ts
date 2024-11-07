import { Component,inject,Input, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Routes } from '@angular/router';
import { startAfter } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-recipes',
  standalone: true,
  imports: [],
  templateUrl: './list-recipes.component.html',
  styleUrl: './list-recipes.component.css'
})
export class ListRecipesComponent {
  api= inject(ApiService);

  @Input()
  type:string='';

  @Input()
  ingredient:string='';

  $state:WritableSignal<any> =signal({
    loading:false,
    error:false,
    data:[]
  });

  ngOnInit(){

    this.fetchData();
  }

  fetchData(){
    this.$state.update(state=>(
      {...state, loading: true}
    ));

    let request;

    switch(this.type){
      case 'category':
            request= this.api.getCategories(); 
            break;
      default:
            request= this.api.getNationalities(); 
            break;
    }

    if (request){
      request.subscribe({
        next: (data) =>{
          this.$state.update(state =>(
            {...state, loading: false, error: false, data: data}
          ));
        },
        error: (err)=>{
          this.$state.update(state =>(
            {...state, loading: false, error: err, data: []}
          ));
        }
      })
    }else{
      this.$state.update(state=>(
        {...state, loading:false, error:'categoria incorrecta'}
      ));
    }
  }

  goToRecipe(idMeal:string){
    this.Routes.navigate(['recipe',idMeal]);
  }
}
