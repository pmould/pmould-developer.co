import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,  } from '@angular/http';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  saveMessage(form){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let loc = window.location;
    return this.http.post(loc.protocol+'//'+loc.host+':3000/saveMessage', form, options);
  }

}
