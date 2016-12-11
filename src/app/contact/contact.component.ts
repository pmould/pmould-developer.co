import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ContactService } from './contact.service';

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
    ]),
    trigger('flyInOutTop', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate('.4s')
      ]),
      transition('* => void', [
        animate('.4s', style({transform: 'translateY(-100%)'}))
      ])
    ]) 
  ]
})
export class ContactComponent implements OnInit {
  aboutMeImg = 'assets/img/about-me-img.jpg';
  submitted = false;
  submissionSent = false;
  submittedValidate = false;
  contactForm: FormGroup;
  constructor(private _fb: FormBuilder, private contactService: ContactService) { }

  ngOnInit() {

      // the short way
      this.contactForm = this._fb.group({
        name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
        email: ['', [<any>Validators.required, this.emailValidator]],
        message: ['', <any>Validators.required]
      });
  }

  save(form, valid) {
    if (valid) {
      this.contactService.saveMessage(form)
        .subscribe(data => {
           let res = data.json();
           if(res.response === 'success') {
             this.submitted = true;
             setTimeout(() => {
               this.submitted = false;
               this.submittedValidate = false;
               this.submissionSent = false;
               this.contactForm.reset();
             }, 3000)
           } else {
             this.submissionSent = false;
           }
           
        }
      );
      this.submissionSent = true;
    } else {
      this.submittedValidate = true;
    }
  }

  emailValidator(control: FormControl) {
    if (Validators.required(control)) {
      return null;
    }
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (!EMAIL_REGEXP.test(control.value)) {
      return {invalidEmail: true};
    }
  }  

}
