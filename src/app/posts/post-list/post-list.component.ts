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
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-500px)'}),
        group([
          animate('1.25s ease-out', style({
            transform: 'translateY(0px)',
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
