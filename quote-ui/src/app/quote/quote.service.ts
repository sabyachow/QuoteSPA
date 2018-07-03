import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Quote } from '../quote/quote.model';


@Injectable()
export class QuoteService {
    constructor(private http:Http) {}



    getQuote(quote: Quote) {
        //const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:8080/quote', quote);
        //return this.http.get('http://localhost:8090/customers/eligibility/50');
    }
}
