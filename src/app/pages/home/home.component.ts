import { Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  api=inject(ApiService);
  //router= inject();

  $state:WritableSignal<any>=signal({
    type:'nationality',
    loading:false,
    error:false,
    data:undefined
  });

  @Input()
  set type(type:string){

    this.$state.update(state=>(
      {...state, loading:true, type:type}
    ));

    let resquest:Observable<any>;
    switch(type){
      case 'category':
            resquest= this.api.getCategories(); 
            break;
      default:
        resquest= this.api.getNationalities(); 
    }

    resquest.subscribe(
      (data:any)=>{
      this.$state.update(state=>({
        ...state,loading:false,error:false,
         data:data.map((m:any)=>(
          type=='category'? ({name:m.strCategory}) : ({name: m.strArea})
        ))
      }));
      console.log(data);
    },
    (err)=>{
      this.$state.update(state=>({
        ...state,loading:false,error:true, data: []
      }));
      console.log(err)
    });
  }

  ngOnInit(){}


  /*listRecipes(ingredient:string){
    this.router.navigate(['recipes',this.$state().type, ingredient]);
  }*/
  /*  let request= this.api.getNationalities();

    request.subscribe(
      (data:any)=>{
        console.log(data);
      },
      (err)=>{
        console.log(err);
      }
    )
    
  }*/
}
