import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: [PostsService],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('animateTitle', [
      state('in', style({overflow: 'initial', opacity: 1})),
      transition('void => *', [
        style({overflow: 'hidden', opacity: 0}),
        group([
          animate('0.5s .25s ease', style({
            overflow: 'hidden'
          }))
        ])
      ]),
    ]),
    trigger('flyInOut', [
      state('in', style({width: '100%', transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 0, overflow: 'hidden', transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.5s .75s ease', style({
            transform: 'translateX(0)',
            width: '100%',
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
          transform: 'translateY(750px)',
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
export class PostSingleComponent implements OnInit {

  post;//: Post;

  constructor( private postsService: PostsService, private route: ActivatedRoute,private _router: Router, private el: ElementRef ) {
   
  }

  getPost(slug){
    this.postsService
      .getPost(slug)
      .subscribe(res => {
        this.post = res[0];
         this.el.nativeElement.querySelector('.content').innerHTML = this.post.content.rendered;
          let fragment ='';
          this.route.fragment.forEach((f)=> {
            if ($('#'+f).length) {
              $('html, body').animate({
                  scrollTop: $('#'+f).offset().top -200
              }, 0);  
              window.location.hash = f; 
            }       
          });
         $('.content a').click((e) => {
           var fragment = e.target.getAttribute('href').substr(1);
           e.preventDefault();
          if($('#'+fragment).length) {
            $('html, body').animate({
            scrollTop: $('#'+fragment).offset().top -200
            }, 0);
            window.location.hash = fragment;          
          }
          });
         });
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
       let slug = params['slug'];
       this.getPost(slug)
    });
    $('.navbar').css('background', 'white');
  }

}
