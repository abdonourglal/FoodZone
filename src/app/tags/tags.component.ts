import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../Service/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  constructor(private foodService: FoodService) {}
  @Input()
  foodPageTags?: string[];
  tags?: Tag[];
  ngOnInit(): void {
    if (!this.foodPageTags) {
      this.tags = this.foodService.getAllTags();
    }
  }
}
