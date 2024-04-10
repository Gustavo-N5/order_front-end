import { Component, Input } from '@angular/core';
import { Order } from '../../models/order/order.model';

@Component({
  selector: 'app-card-order',
  templateUrl: './card-order.component.html',
  styleUrl: './card-order.component.scss'
})
export class CardOrderComponent {

  @Input({required: true}) order!: Order;

}
