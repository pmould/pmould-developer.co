import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10){
            $('.intro').addClass('on');
            $('.navbar').addClass('on');
            $('.blog-header').addClass('on');
        } else {
          $('.intro').removeClass('on');
        	$('.navbar').removeClass('on');
          $('.blog-header').removeClass('on');
          
        }
    });
  }

}

