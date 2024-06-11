import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyect',
  standalone: true,
  imports: [],
  templateUrl: './proyect.component.html',
  styleUrl: './proyect.component.css'
})
export class ProyectComponent {

  constructor(public languageService: LanguageService) { }


  register() {
    window.open("https://flicksense.vercel.app/auth/register", '_blank')
  }

  catalog(){
    
    if (!this.languageService.eng) {
      Swal.fire({
        icon: "warning",
        title: "La pagina web está hospedada con una suscripcion gratuita, la primera cargar puede demorarse unos 30s~40s",
        iconColor: "#efd558",
        confirmButtonColor: "#7a0000",
        width:"300px",
      
      }).then((resp) => {

        window.open("https://flicksense.vercel.app/movies", '_blank')
      })
    } else {
      Swal.fire({
        icon: "warning",
        title: "The website is hosted with a free subscription, so the initial load may take about 30 to 40 seconds.",
        iconColor: "#efd558",
        confirmButtonColor: "#7a0000",
        width:"300px"
      }).then((resp) => {

      window.open("https://flicksense.vercel.app/movies", '_blank')
      })
    }
  }

  goTo() {
    if (!this.languageService.eng) {
      Swal.fire({
        icon: "warning",
        title: "La pagina web está hospedada con una suscripcion gratuita, la primera cargar puede demorarse unos 30s~40s",
        iconColor: "#efd558",
        confirmButtonColor: "#7a0000",
        width:"300px"
      }).then((resp) => {

        window.open("https://flicksense.vercel.app/", '_blank')
      })
    } else {
      Swal.fire({
        icon: "warning",
        title: "The website is hosted with a free subscription, so the initial load may take about 30 to 40 seconds.",
        iconColor: "#efd558",
        confirmButtonColor: "#7a0000",
        width:"300px"
      }).then((resp) => {

        window.open("https://flicksense.vercel.app/", '_blank')
      })
    }


  }
}
