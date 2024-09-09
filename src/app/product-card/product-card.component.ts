import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() productItem: any;
  constructor(private router: Router , private cartService: CartService) {}
  onView(id: number) {
    this.router.navigate(['/product-details', id]);
  }
  addToCart(product: any) {
    this.cartService.addToCart(product);
    // alert('Product added to cart!'); 
  }

  // clearCart() {
  //   this.cartService.clearCart();
  // }

  // removeFromCart(product: any) {
  //   this.cartService.removeFromCart(product);
  
  // }

  // increaseQuantity(product: any) {
  //   this.cartService.increaseQuantity(product);
  
  // }

  // decreaseQuantity(product: any) {
  //   this.decreaseQuantity(product);
  // }
}
