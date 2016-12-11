import { Component, OnInit, OnDestroy} from '@angular/core';
import { MetaService } from 'ng2-meta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private metaService: MetaService) {

  }

  ngOnInit() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10){
            $('.navbar').addClass('on');
            $('.header-image').addClass('on');
            $('.position').addClass('on');
            $('.blog-header').addClass('on');
        } else {
        	$('.navbar').removeClass('on');
        	$('.header-image').removeClass('on');
        	$('.position').removeClass('on');
          $('.blog-header').removeClass('on');
        }
    });
  }

}

