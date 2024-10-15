import { Component, OnInit } from '@angular/core';
import { FoodService } from '../Service/food/food.service';
import { FoodModule } from '../shared/models/food/food.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: FoodModule[] = [];
  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm'] !== undefined) {
        const searchTerm = params['searchTerm'].toLowerCase();
        this.foods = this.foodService.getAll().filter((food) => {
          const match = food.name.toLowerCase().includes(searchTerm);
          console.log(`Food: ${food.name}, Match: ${match}`); // Log matching process
          console.log(this.foods.length);
          return match;
        });
      } else if (params['tag']) {
        this.foods = this.foodService.getAllfoodsByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
