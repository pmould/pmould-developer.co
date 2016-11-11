import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  ElementRef
} from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService],
  animations: [
    trigger('animateTitle', [
      state('in', style({overflow: 'initial', opacity: 1})),
      transition('void => *', [
        style({overflow: 'hidden', opacity: 0}),
        group([
          animate('0.5s .75s ease', style({
            overflow: 'hidden'
          }))
        ])
      ]),
    ]),
    trigger('flyInOut', [
      state('in', style({width: 515, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 0, padding: 0, border: 'none',overflow: 'hidden', transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.5s .75s ease', style({
            transform: 'translateX(0)',
            width: 515,
            padding: '20px 25px 25px 25px',
            border: '5px solid #00a0d4',
            overflow: 'initial'
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
    ]),
    trigger('flyInOutBottom', [
      state('in', style({
        transform: 'translateY(0)',
        borderTop: '1px solid #cdcdcd'
      })),
      transition('void => *', [
        style({
          transform: 'translateY(200%)',
          borderTop: 'none'
        }),
        animate('0.5s .75s')
      ]),
      transition('* => void', [
        animate('0.5s .75s', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(
    private postsService: PostsService,
    private router: Router,
    private element: ElementRef
     ) {
    this.router.events.subscribe((path) => {
      element.nativeElement.scrollIntoView();
    });
  }

  getPosts(){
    this.postsService
      .getPosts()
      .subscribe(res => {
        this.posts = res;
      });
  }

  ngOnInit() {
    this.getPosts();
    $('.navbar').css('background', 'white');
  }
 
  selectPost(slug) {
  	this.router.navigate(['/blog', slug]);
  }

  dateFormat(date) {
    return moment(date).format('DD MMM YYYY');
  }

}
