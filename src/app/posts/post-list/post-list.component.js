"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var posts_service_1 = require('../posts.service');
var moment = require('moment');
var PostListComponent = (function () {
    function PostListComponent(postsService, router, element) {
        this.postsService = postsService;
        this.router = router;
        this.element = element;
        this.router.events.subscribe(function (path) {
            element.nativeElement.scrollIntoView();
        });
    }
    PostListComponent.prototype.getPosts = function () {
        var _this = this;
        this.postsService
            .getPosts()
            .subscribe(function (res) {
            _this.posts = res;
        });
    };
    PostListComponent.prototype.ngOnInit = function () {
        this.getPosts();
        $('.navbar').css('background', 'white');
    };
    PostListComponent.prototype.selectPost = function (slug) {
        this.router.navigate(['/blog', slug]);
    };
    PostListComponent.prototype.dateFormat = function (date) {
        return moment(date).format('DD MMM YYYY');
    };
    PostListComponent = __decorate([
        core_1.Component({
            selector: 'app-post-list',
            templateUrl: './post-list.component.html',
            styleUrls: ['./post-list.component.css'],
            providers: [posts_service_1.PostsService],
            animations: [
                core_1.trigger('animateTitle', [
                    core_1.state('in', core_1.style({ overflow: 'initial', opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ overflow: 'hidden', opacity: 0 }),
                        core_1.group([
                            core_1.animate('0.5s .75s ease', core_1.style({
                                overflow: 'hidden'
                            }))
                        ])
                    ]),
                ]),
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ width: 515, transform: 'translateX(0)', opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ width: 0, padding: 0, border: 'none', overflow: 'hidden', transform: 'translateX(50px)', opacity: 0 }),
                        core_1.group([
                            core_1.animate('0.5s .75s ease', core_1.style({
                                transform: 'translateX(0)',
                                width: 515,
                                padding: '20px 25px 25px 25px',
                                border: '5px solid #00a0d4',
                                overflow: 'initial'
                            })),
                            core_1.animate('0.5s ease', core_1.style({
                                opacity: 1
                            }))
                        ])
                    ]),
                    core_1.transition('* => void', [
                        core_1.group([
                            core_1.animate('0.5s ease', core_1.style({
                                transform: 'translateX(50px)',
                                width: 0
                            })),
                            core_1.animate('0.5s .75s ease', core_1.style({
                                opacity: 0
                            }))
                        ])
                    ])
                ]),
                core_1.trigger('flyInOutBottom', [
                    core_1.state('in', core_1.style({
                        transform: 'translateY(0)',
                        borderTop: '1px solid #cdcdcd'
                    })),
                    core_1.transition('void => *', [
                        core_1.style({
                            transform: 'translateY(200%)',
                            borderTop: 'none'
                        }),
                        core_1.animate('0.5s .75s')
                    ]),
                    core_1.transition('* => void', [
                        core_1.animate('0.5s .75s', core_1.style({ transform: 'translateY(100%)' }))
                    ])
                ])
            ]
        })
    ], PostListComponent);
    return PostListComponent;
}());
exports.PostListComponent = PostListComponent;
