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
        return "First Name : "+this.firstName+" \nLast Name : "+this.lastName+" \nAddress : "+this.address+" \nCity : "+this.city+" \nState : "+this.state+" \nZIP : "+this.zip+" \nPhone number : "+this.phone+" \nEmail : "+this.email+"\n------------\n";
    }
}

let addressBook = new Array();

function contactExists(fName, lName){
    return addressBook.some(u => u.firstName == fName && u.lastName == lName);
}

function addContact(newContact){
    if(contactExists(newContact.firstName, newContact.lastName)){
        throw "Contact already exists";
    }else{
        addressBookArr.push(newContact);
    }
 }

function deleteContact(fName, lName){
    if(contactExists(fName, lName)){
    addressBook.pop(contactExists(fName,lName))
    }else{
        console.log("Contact Does Not Exist");
    }
}

function searchByCity(city) {
    return addressBook.filter((contact) => contact.city == city);
  }

function searchByState(state) {
    return addressBook.filter((contact) => contact.state == state);
  }

  function sortByCity(){
            addressBook.sort((person1, person2) => (person1.city).localeCompare(person2.city));
            return addressBook;
  }

  function sortByState(){
    addressBook.sort((person1, person2) => (person1.state).localeCompare(person2.state));
    return addressBook;
}

function sortByZip(){
    addressBook.sort((person1, person2) => (person1.zip).localeCompare(person2.zip));
    return addressBook;
}

function editContact(fName, lName, property, value){
    if(contactExists(fName, lName)){
    switch(property){
        case "address":
            addressBook.find((contact) => contact.firstName == fName).address = value;
            break;
        case "city":
            addressBook.find((contact) => contact.firstName == fName).city = value;
            break;
        case "state":
            addressBook.find((contact) => contact.firstName == fName).state = value;
            break;
        case "zip":
            addressBook.find((contact) => contact.firstName == fName).zip = value;
            break;
        case "phone":
            addressBook.find((contact) => contact.firstName == fName).phoneNo = value;
            break;
        case "email":
            addressBook.find((contact) => contact.firstName == fName).email = value;
            break;
        default:
            console.log("Enter valid property");
    }
  }else{
      console.log("Contact Does Not Exist");
  }
}
let contact1 = new Contact("Hardaman","Beni","Sec70","Chandigarh","Punjab",160071,919066681818,"daman@gmial.com");
    
    let contact2 = new Contact("Aman","Singh","Sec72","Mohali","Haryana",160072,919066654818,"aman@gmial.com");
try{
    addressBook.push(contact1);
    addressBook.push(contact2);

    }catch(e){
        console.error(e);
    } 

const reducer = (count) => {return ++count}
console.log("Contacts in address book are : \n"+addressBook); 
  
editContact("Hardaman", "Beni", "address", "Sec66");
console.log(addressBook);
console.log("No of contacts : "+ addressBook.reduce(reducer, 0));

//deleteContact("Aman","Singh");
//console.log("After deleting - ");
//console.log(addressBook);
//console.log("No of contacts : "+ addressBook.reduce(reducer, 0));

try{
    addContact(contact1);
}catch(e){
    console.error(e);
}

console.log("Contacts in Mohali:\n"+searchByCity("Mohali"));
console.log("contacts in punjab:\n"+searchByState("Punjab"));

console.log("No of contacts in mohali : "+ searchByCity("Mohali").reduce(reducer, 0));
console.log("No of contacts in punjab : "+ searchByState("Punjab").reduce(reducer, 0));

addressBook.sort((person1, person2) => (person1.firstName).localeCompare(person2.firstName));
console.log("Sorted list by name: \n"+addressBook); 

console.log("Sorted list by city: \n"+sortByCity()); 

console.log("Sorted list by state: \n"+sortByState());

console.log("Sorted list by zip: \n"+sortByZip()); 