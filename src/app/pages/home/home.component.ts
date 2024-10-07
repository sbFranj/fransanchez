import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { AcademicComponent } from '../academic/academic.component';
import { ProfessionalComponent } from '../professional/professional.component';
import { ProyectComponent } from '../proyect/proyect.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl:'./home.component.css'
})
export class HomeComponent {

  constructor(public lenguageService:LanguageService){}

}
