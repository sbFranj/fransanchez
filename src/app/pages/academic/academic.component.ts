import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [],
  templateUrl: './academic.component.html',
  styleUrl: './academic.component.css'
})
export class AcademicComponent {

  constructor(public languageService:LanguageService){}
}
