import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  postProduct(data:any){
    let host=environment.host;
    return this.http.post<any>(host+"/productList/", data);
  }

  getProduct(){
    let host=environment.host;
    return this.http.get<any>(host+"/productList/");
  }

  putProduct(data:any, id:number){
    let host=environment.host;
    return this.http.put<any>(host+"/productList/"+id, data)
  }

  deleteProduct(id:number){
    let host=environment.host;
    return this.http.delete<any>(host+"/productList/"+id)
  }
}
