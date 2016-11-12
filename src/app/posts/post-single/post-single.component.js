"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var posts_service_1 = require('../posts.service');
var PostSingleComponent = (function () {
    function PostSingleComponent(postsService, route, _router, el) {
        this.postsService = postsService;
        this.route = route;
        this._router = _router;
        this.el = el;
    }
    PostSingleComponent.prototype.getPost = function (slug) {
        var _this = this;
        this.postsService
            .getPost(slug)
            .subscribe(function (res) {
            _this.post = res[0];
            _this.el.nativeElement.querySelector('.content').innerHTML = _this.post.content.rendered;
            var fragment = '';
            _this.route.fragment.forEach(function (f) {
                if ($('#' + f).length) {
                    $('html, body').animate({
                        scrollTop: $('#' + f).offset().top - 200
                    }, 0);
                    window.location.hash = f;
                }
            });
            $('.content a').click(function (e) {
                var fragment = e.target.getAttribute('href').substr(1);
                e.preventDefault();
                if ($('#' + fragment).length) {
                    $('html, body').animate({
                        scrollTop: $('#' + fragment).offset().top - 200
                    }, 0);
                    window.location.hash = fragment;
                }
            });
        });
    };
    PostSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var slug = params['slug'];
            _this.getPost(slug);
        });
        $('.navbar').css('background', 'white');
    };
    PostSingleComponent = __decorate([
        core_1.Component({
            selector: 'app-post-single',
            templateUrl: './post-single.component.html',
            styleUrls: ['./post-single.component.css'],
            providers: [posts_service_1.PostsService],
            animations: [
                core_1.trigger('animateTitle', [
                    core_1.state('in', core_1.style({ overflow: 'initial', opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ overflow: 'hidden', opacity: 0 }),
                        core_1.group([
                            core_1.animate('0.5s .25s ease', core_1.style({
                                overflow: 'hidden'
                            }))
                        ])
                    ]),
                ]),
                core_1.trigger('flyInOut', [
                    core_1.state('in', core_1.style({ width: '100%', transform: 'translateX(0)', opacity: 1 })),
                    core_1.transition('void => *', [
                        core_1.style({ width: 0, overflow: 'hidden', transform: 'translateX(50px)', opacity: 0 }),
                        core_1.group([
                            core_1.animate('0.5s .75s ease', core_1.style({
                                transform: 'translateX(0)',
                                width: '100%',
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
                            transform: 'translateY(750px)',
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
    ], PostSingleComponent);
    return PostSingleComponent;
}());
exports.PostSingleComponent = PostSingleComponent;
