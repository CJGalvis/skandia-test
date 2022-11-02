import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeContainerComponent } from "./components/home-container/home-container.component";
import { CardReviewTargetComponent } from "./components/card-review-target/card-review-target.component";
import { ListItemsComponent } from "./components/list-items/list-items.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { TextTopComponent } from './components/text-top/text-top.component';
import { TextMediumComponent } from './components/text-medium/text-medium.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    CardReviewTargetComponent,
    ListItemsComponent,
    TextTopComponent,
    TextMediumComponent,
    ItemCardComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
