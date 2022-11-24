import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLightTheme: boolean = false;
  myFlagForSlideToggle: boolean = true;
  theme: any = localStorage.getItem('theme');
  oppositTheme:any;

  constructor(    
  ) { }

  ngOnInit(): void {  
    if(!localStorage.getItem('theme') || localStorage.getItem('theme')==''){
      localStorage.setItem('theme','dark');
      this.theme = 'dark'
    }
    this.getOppositeTheme()
  }
  getOppositeTheme(){
    if(localStorage.getItem('theme')=='dark'){      
      this.oppositTheme = 'light'
    }else{         
      this.oppositTheme = 'dark'
    }
  }
  toggleField(){
    document.body.classList.toggle('light-theme')
    if(localStorage.getItem('theme')=='dark'){      
      localStorage.setItem('theme','light') 
    }else{     
      localStorage.setItem('theme','dark') 
    }
    this.getOppositeTheme()
  }
}
