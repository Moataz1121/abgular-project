import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
// import data from '../../assets/products.json';
import { ProductRequestService } from '../services/product-request.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products :any;

// products: Array<any> = data;
constructor(private productRequestService: ProductRequestService , private cartService: CartService) {}

ngOnInit() {
  this.productRequestService.getProducts().subscribe((data : any) => {
    this.products = data.products;
  });
}

}