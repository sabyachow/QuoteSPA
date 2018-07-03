export class Customer {
    public id: string;
    public fname: string;
    public lname: string;
    public eligibility: string;
    public dl: string;
    public zip: string;

    constructor(
         id: string,
         fname: string,
         lname: string,
         eligibility: string,
         dl: string,
         zip: string
      ) {
           this.id = id;
           this.fname = fname;
           this.lname = lname;
           this.eligibility = eligibility;
           this.dl = dl;
           this.zip = zip;

    }

}
