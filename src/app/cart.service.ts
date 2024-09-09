import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems:any[] = [];
  constructor() { }

  addToCart(product: any) {
    // this.cartItems.push(product);
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  increaseQuantity(product: any) {
    const item = this.cartItems.find(item => item.id === product.id);
    if (item) {
      item.quantity += 1;
    }
  }
  decreaseQuantity(product: any) {
    const item = this.cartItems.find(item => item.id === product.id);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else if (item && item.quantity === 1) {
      this.removeFromCart(product);
    }
  }
  removeFromCart(product: any) {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
