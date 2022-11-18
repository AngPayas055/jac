import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  isLightTheme: boolean = false;
  myFlagForSlideToggle: boolean = true;
  theme: any = localStorage.getItem('app-theme');
  constructor(    
  ) { }

  ngOnInit(): void {   
  }
  toggleField(){
    document.body.classList.toggle('light-theme')
  }
}
