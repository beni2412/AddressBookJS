class Contact{
    constructor (...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        let firstNameRegex =RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
        this._firstName=firstName;
        else throw "Invalid first name";
    }
    get lastName()
    {
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName=lastName;
        let lastNameRegex =RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNameRegex.test(lastName))
        this._lastName = lastName;
        else throw "Invalid Last name";
    }
    get address(){
        return this._address;
    }
    set address(address){
        let addRegex = RegExp('^[A-Z]{1}[a-z0-9/_  +]{4,}$');
        if(addRegex.test(address))
        this._address=address;
        else throw "Invalid address";
    }
    get city(){
        return this._city;
    }
    set city(city){
        let cityRegex = RegExp('^[A-Z]{1}[a-z A-Z +]{2,}$');
        if(cityRegex.test(city))
        this._city=city;
        else throw "Invalid city";
    }
    get state(){
        return this._state;
    }
    set state(state){
        let stateRegex = RegExp('^[A-Z]{1}[a-z +]{2,}$');
        if(stateRegex.test(state))
        this._state=state;
        else throw "Invalid state";
    }
    get zip(){
        return this._zip; 
    }
    set zip(zip){
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zip))
        this._zip=zip;
        else throw "Invalid zip";
    }
    get phone(){
        return this._phone;
    }
    set phone(phone){
        let phoneRegex = RegExp('[0-9]{2}[7-9]{1}[0-9]{9}');
        if(phoneRegex.test(phone))
        this._phone=phone;
        else throw "Invalid phone";
    }
    get email(){
        return this._email;
    }
    set email(email){
        let emailRegex = RegExp('^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$');
        if(emailRegex.test(email))
        this._email=email;
        else throw "Invalid email";
    }
    toString(){
        return "First Name : "+this.firstName+" \nLast Name : "+this.lastName+" \nAddress : "+this.address+" \nCity : "+this.city+" \nState : "+this.state+" \nZIP : "+this.zip+" \nPhone number : "+this.phone+" \nEmail : "+this.email;
    }
}


try{
    let contact1 = new Contact("Hardaman","Beni","Sec70","Mohali","Punjab",160071,919066681818,"daman@gmial.com");
console.log(contact1.toString()); 
    }catch(e){
        console.error(e);
    } 
