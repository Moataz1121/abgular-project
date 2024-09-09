import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductRequestService } from '../services/product-request.service';
import { CartService } from '../cart.service';
// import data from '../../assets/products.json';
// import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
 
// products: Array<Product> = data;

  productItem: any;
  @Input() id : string ='';
  // private productRequestService: ProductRequestService;
  // product: any;
  constructor(private productRequestService: ProductRequestService , private cartService: CartService) {
    // this.product = productRequestService;
  }
  discountedPrice() {
    const price = Number(this.productItem?.price);
    const discountPercentage = Number(this.productItem?.discountPercentage);
    const discounted = price * (1 - discountPercentage / 100);
    return discounted.toFixed(2);
  }
ngOnInit() {
    this.productRequestService.getProductDetails(this.id).subscribe((data : any) => {
      this.productItem = data;
    })
    // this.productItem = this.products.find((product) => product.id.toString() == this.id);  }
}

addToCart(productItem: any) {
  this.cartService.addToCart(this.productItem);
}
}
