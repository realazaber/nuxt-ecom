import { defineStore } from "pinia";
import { IProduct } from "../interfaces/IProduct";

const cartStore = defineStore({
  id: "cart",
  state: () => ({
    cart: {
      id: 0,
      products: [] as IProduct[],
    },
  }),
  actions: {
    addToCart(product: IProduct) {
      this.cart.products.push(product);
      alert("Added " + product.title);
    },
    removeFromCart(productId: number) {
      const index = this.cart.products.findIndex(
        (product) => product.id === productId
      );

      if (index !== -1) {
        this.cart.products.splice(index, 1);
      }
      alert("Remved item");
    },
  },
  getters: {
    getCartItems(): IProduct[] {
      return this.cart.products;
    },
  },
});

export default cartStore;
