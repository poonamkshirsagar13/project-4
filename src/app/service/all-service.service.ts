import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {

  constructor(private httpClient: HttpClient) { }
  tableData(sortBy:string, orderBy:string, pageNumber: number =1):Observable<any> {
     return this.httpClient.get(`http://localhost:5000/products?page=${pageNumber}&sortBy=${sortBy}&orderBy=${orderBy}`);
  }
  getProductDetail(id: number): Observable<any> {
     return this.httpClient.get(`http://localhost:5000/products/${id}`);
  }
  loadData():Observable<any>{
    return this.httpClient.get(`http://localhost:5000/products`);
  }
}
