import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  eng:boolean = false
  constructor() { }

  change(){
    this.eng = !this.eng
  }
}
