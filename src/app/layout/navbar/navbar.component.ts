import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public languageService:LanguageService){}
  

  toggleNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  }
  hiddeFooter(){
    this.languageService.show=false
  }

  showFooter(){
    this.languageService.show=true
  }

}
