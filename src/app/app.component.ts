import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  siteLogo = 'assets/img/pmould-logo.png';

  ngOnInit() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10){
            $('header').addClass('on');
            $('.header-image').addClass('on');
            $('.position').addClass('on');
        } else {
        	$('header').removeClass('on');
        	$('.header-image').removeClass('on');
        	$('.position').removeClass('on');
        }
    });
  }

  scrollDown() {
    $('html, body').animate({
      scrollTop: $(".gallery").offset().top
  	}, 2000); 	
  }

}

