import { Component, OnInit } from '@angular/core';
import { FoodModule } from '../shared/models/food/food.module';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../Service/food/food.service';
import { CartService } from '../Service/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: FoodModule;
  constructor(
    private activatedrout: ActivatedRoute,
    private foodservice: FoodService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedrout.params.subscribe((param) => {
      if (param['id']) this.food = foodservice.getFoodById(param['id']);
    });
  }

  ngOnInit(): void {}
  addTocart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
