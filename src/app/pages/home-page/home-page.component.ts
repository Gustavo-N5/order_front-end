import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../servicies/order.service';
import { Order } from '../../models/order/order.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  
  order: Order[]= []

  constructor(private orderServicie: OrderService) {}

  ngOnInit(): void {
    this.getClient()
  }
  
  getClient() {
    this.orderServicie.getAll().subscribe((data) => {
      this.order = data;
    });
  }
}
