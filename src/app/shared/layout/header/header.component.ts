import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  siteLogo = 'assets/img/pmould-logo.png';
  constructor() { }

  ngOnInit() {
  }
  
  scrollDown() {
    $('html, body').animate({
      scrollTop: $(".gallery").offset().top
  	}, 2000); 	
  }
}
