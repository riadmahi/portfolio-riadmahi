import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { PresentationSectionComponent } from "./presentation-section/presentation-section.component";
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PresentationSectionComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
