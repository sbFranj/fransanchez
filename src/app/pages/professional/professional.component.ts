import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-professional',
  standalone: true,
  imports: [],
  templateUrl: './professional.component.html',
  styleUrl:'./professional.component.css'
})
export class ProfessionalComponent {

  constructor(public languageService:LanguageService){}

}
