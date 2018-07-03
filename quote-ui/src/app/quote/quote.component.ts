import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Quote } from './quote.model';
import { Customer } from './customer.model';
import { Vehicle } from './vehicle.model';
import { QuoteService } from './quote.service';

import {Response } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
//export class QuoteComponent implements OnInit {
export class QuoteComponent {
    //@ViewChild('f') slForm: NgForm;
    numberSubscription: Subscription;

    customers = [{
                     "id": "0",
                     "fname": "Default",
                     "lname": "Default",
                     "eligibility": "Y",
                     "dl": "DEFAULT",
                     "zip": "06074"
                 }];
    vehicles = [{
                    "vin": "DEFAULT",
                    "make": "DEFAULT",
                    "model": "DEFAULT",
                    "year": "2010"
                }];

    quoteS = new Quote("0", "Standard", this.customers, this.vehicles, "0","0");
    quoteP = new Quote("0", "Premium", this.customers, this.vehicles, "0","0");


    constructor(private quoteService: QuoteService) { }

    /*ngOnInit() {
      const myNumbers = Observable.interval(1000);
      this.numberSubscription = myNumbers.subscribe(
        (number: number) => {
            console.log(number);
        }
     );
    } */

    getQuote(form: NgForm){

        const value = form.value;
        console.log(value.fname);
        console.log("Inside the getQuote function in quote.components.ts");

        this.customers = [{
                             "id": "0",
                             "fname": value.fname,
                             "lname": value.lname,
                             "eligibility": "Y",
                             "dl": value.dl,
                             "zip": value.zip
                         }];
        this.quoteS.customers = this.customers;
        this.quoteP.customers = this.customers;

        this.vehicles = [{
                            "vin": value.vin,
                            "make": value.make,
                            "model": value.model,
                            "year": value.year
                         }];
        this.quoteS.vehicles = this.vehicles;
        this.quoteP.vehicles = this.vehicles;

        console.log(this.quoteS);
        console.log(this.quoteP);

        this.quoteService.getQuote(this.quoteS).subscribe(
            (response: Response) => {
                this.quoteS = response.json();
                console.log(this.quoteS);
            },
            (error) => console.log(error)
        );

        this.quoteP.m_premium = this.quoteS.m_premium;
        this.quoteService.getQuote(this.quoteP).subscribe(
            (response: Response) => {
                this.quoteP = response.json();
                console.log(this.quoteP);
            },
            (error) => console.log(error)
        );
    }
}
