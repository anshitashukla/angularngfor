import { Component } from "@angular/core";
import { ProductsService } from "Product/product.service";

@Component({
    selector:'products',
    templateUrl:'./products.component.html',
    styles:[]
})

export class ProductsComponent{
    products;
    constructor(productService: ProductsService){
        this.products=productService.getProducts();
        
    }
}