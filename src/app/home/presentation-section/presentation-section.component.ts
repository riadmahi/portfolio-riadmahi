import { Component } from '@angular/core';
import { TopBarComponent } from "../../top-bar/top-bar.component";

@Component({
  selector: 'app-presentation-section',
  standalone: true,
  imports: [TopBarComponent],
  templateUrl: './presentation-section.component.html',
  styleUrl: './presentation-section.component.scss'
})
export class PresentationSectionComponent {

}
