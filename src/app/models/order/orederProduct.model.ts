import { Product } from "../product/product.model";

export interface OrderPorduct{ 
    orderId: number | null;
    productId:number;
    quantidade:number;
    product: Product;
}