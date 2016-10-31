import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate('.350s .75s')
      ]),
      transition('* => void', [
        animate('.350s .75s', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
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
