import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { ProyectComponent } from './pages/proyect/proyect.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "academic", component: AcademicComponent},
    {path: "professional", component: ProfessionalComponent},
    {path: "project", component:ProyectComponent},
    {path: "contact", component:ContactComponent}
];
