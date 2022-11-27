import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseURL = "http://localhost:8080/stocks";

  constructor(private http: HttpClient) { }

  getStockList(): Observable<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseURL}`);
  }

  createStock(stock: Stock): Observable<object>{
    return this.http.post(`${this.baseURL}`, stock);
  }

  getStockById(id: number): Observable<Stock>{
    return this.http.get<Stock>(`${this.baseURL}/${id}`);
  }

  updateStock(id: number, stock: Stock): Observable<object>{
    return this.http.put(`${this.baseURL}/${id}`, stock);
  }

  deleteStock(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
