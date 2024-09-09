import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
cartItems:any[] = [];
totalCartPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems =this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  clearCart() {
    this.cartItems = [];
    this.cartService.clearCart();
    this.totalCartPrice = 0;
  }

  increaseQuantity(cartItems: any) {
    this.cartService.increaseQuantity(cartItems);
    this.calculateTotalPrice();
  }

  decreaseQuantity(cartItems: any) {
    this.cartService.decreaseQuantity(cartItems);
    this.calculateTotalPrice();
  }

  removeFromCart(cartItems: any) {
    this.cartService.removeFromCart(cartItems);
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalCartPrice = this.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
  }
}
