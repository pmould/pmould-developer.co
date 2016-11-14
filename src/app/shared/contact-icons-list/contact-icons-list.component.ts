import {
  Component,
  OnInit,
  AfterViewChecked,
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  ElementRef,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'contact-icons-list',
  templateUrl: './contact-icons-list.component.html',
  styleUrls: ['./contact-icons-list.component.css'],
  animations: [
    trigger('flyInOutBottom', [
      state('in', style({
        transform: 'translateY(0)',
      })),
      transition('void => *', [
        style({
          transform: 'translateY(400%)',
          borderTop: 'none'
        }),
        animate('0.35s 1.4s')
      ]),
      transition('* => void', [
        animate('0.35s 1.25s', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class ContactIconsListComponent implements OnInit, AfterViewChecked {

  @HostBinding('class.row') row = true;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  ngAfterViewChecked() {
  
  }

}
