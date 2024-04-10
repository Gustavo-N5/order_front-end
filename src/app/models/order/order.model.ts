import { Cliente } from "../cliente/cliente.model";
import { Product } from "../product/product.model";
import { OrderPorduct } from "./orederProduct.model";

;export interface Order{
    id:number | null;
    status: string
    valor_total: number
    client_id: number;
    orderProduct: OrderPorduct[];
    client: Cliente | null;
}