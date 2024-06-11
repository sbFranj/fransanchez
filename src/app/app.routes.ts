import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcademicComponent } from './pages/academic/academic.component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "academic", component: AcademicComponent}
];
