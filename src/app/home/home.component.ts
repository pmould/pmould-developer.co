import { 
  Component,
  OnInit,
  trigger,
  state,
  style,
  animate,
  transition,
  group
  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 515, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 0, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.5s .75s ease', style({
            transform: 'translateX(0)',
            width: 515
          })),
          animate('0.5s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.5s ease', style({
            transform: 'translateX(50px)',
            width: 0
          })),
          animate('0.5s .75s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
