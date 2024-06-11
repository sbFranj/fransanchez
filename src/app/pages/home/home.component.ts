import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

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
