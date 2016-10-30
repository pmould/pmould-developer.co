import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10){
            $('.navbar').addClass('on');
            $('.header-image').addClass('on');
            $('.position').addClass('on');
        } else {
        	$('.navbar').removeClass('on');
        	$('.header-image').removeClass('on');
        	$('.position').removeClass('on');
        }
    });
  }

}

