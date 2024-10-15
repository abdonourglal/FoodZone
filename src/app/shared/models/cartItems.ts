import { FoodModule } from './food/food.module';

export class CartItem {
  constructor(food: FoodModule) {
    this.food = food;
    this.price;
  }
  food: FoodModule;
  quantity: number = 1;
  get price(): number {
    return this.quantity * this.food.price;
  }
}
