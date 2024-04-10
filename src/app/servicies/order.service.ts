import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order } from '../models/order/order.model';
import { Cliente } from '../models/cliente/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/api/order"

  public getAll(): Observable<Order[]>{  
    return this.http.get<Order[]>(this.url);
  }
}
