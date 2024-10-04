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

  video:boolean =false;

  register() {
    window.open("https://flicksense.vercel.app/auth/register", '_blank')
  }

  catalog(){
    window.open("https://flicksense.vercel.app/movies", '_blank')
    // if (!this.languageService.eng) {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "La pagina web está hospedada con una suscripcion gratuita, la primera cargar puede demorarse unos 30s~40s",
    //     iconColor: "#efd558",
    //     confirmButtonColor: "#7a0000",
    //     width:"300px",
      
    //   }).then((resp) => {

    //     window.open("https://flicksense.vercel.app/movies", '_blank')
    //   })
    // } else {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "The website is hosted with a free subscription, so the initial load may take about 30 to 40 seconds.",
    //     iconColor: "#efd558",
    //     confirmButtonColor: "#7a0000",
    //     width:"300px"
    //   }).then((resp) => {

    //   window.open("https://flicksense.vercel.app/movies", '_blank')
    //   })
    // }
  }

  goTo(url:string) {
    window.open(url, '_blank')
    // if (!this.languageService.eng) {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "La pagina web está hospedada con una suscripcion gratuita, la primera cargar puede demorarse unos 30s~40s",
    //     iconColor: "#efd558",
    //     confirmButtonColor: "#7a0000",
    //     width:"300px"
    //   }).then((resp) => {

    //     window.open("https://flicksense.vercel.app/", '_blank')
    //   })
    // } else {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "The website is hosted with a free subscription, so the initial load may take about 30 to 40 seconds.",
    //     iconColor: "#efd558",
    //     confirmButtonColor: "#7a0000",
    //     width:"300px"
    //   }).then((resp) => {

    //     window.open("https://flicksense.vercel.app/", '_blank')
    //   })
    // }
  }

  verVideo(){
    this.video = !this.video
    setTimeout(()=>{
      this.video = false;
    },55000)
  }

}
