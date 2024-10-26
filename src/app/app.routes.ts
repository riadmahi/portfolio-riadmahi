import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HobdatingComponent } from './portfolio/hobdating/hobdating.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hobdating', component: HobdatingComponent },
];
