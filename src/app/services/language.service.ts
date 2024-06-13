import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  eng:boolean = false
  show:boolean = true
  constructor() { }

  change(){
    this.eng = !this.eng
  }

  
}
