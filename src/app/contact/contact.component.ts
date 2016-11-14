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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-150%)'}),
        animate('.350s 1s')
      ]),
      transition('* => void', [
        animate('.350s 1s', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('flyInOutRight', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(125%)'}),
        animate('.350s 1.25s')
      ]),
      transition('* => void', [
        animate('.350s 1.25s', style({transform: 'translateX(100%)'}))
      ])
    ]) 
  ]
})
export class ContactComponent implements OnInit {
  aboutMeImg = 'assets/img/about-me-img.jpg';
  constructor() { }

  ngOnInit() {
  }

}
