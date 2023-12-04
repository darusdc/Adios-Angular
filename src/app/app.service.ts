import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get(`${this.baseUrl}/products`)
  }

  getProduct(id: number){
    return this.http.get(`${this.baseUrl}/products/${id}`)
  }
}
