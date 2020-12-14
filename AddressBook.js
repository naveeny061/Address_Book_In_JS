var prompt = require('prompt-sync')();
const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX = RegExp('^[a-zA-Z]{4,}$');
const ZIP_REGEX = RegExp('^[0-9]{6}$');
const PHONE_NUMBER_REGEX = RegExp('^[+]?[0-9]{2}[ ][0-9]{10}$'); 
const EMAIL_REGEX = RegExp('^[a-zA-Z][a-zA-Z0-9]*([.+-][a-zA-Z0-9]+)*(@[a-zA-Z0-9]+[.][a-zA-Z0-9]{2,})([.][a-zA-Z]{2,4})?$');
let contactBookArray = new Array();
class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName,lastName,address,city,state,zip,phoneNumber,email){
        if(!NAME_REGEX.test(firstName)) throw 'Please enter valid firstname.'
        { 
            this.firstName = firstName;
        }
        if(!NAME_REGEX.test(lastName)) throw 'Please enter valid lastname.'
        {
            this.lastName = lastName;
        }
        if(!ADDRESS_REGEX.test(address))throw 'Please enter valid address.'
        {
            this.address = address;
        }
        if(!ADDRESS_REGEX.test(city)) throw 'Please enter valid city.'
        {
            this.city = city;
        }
        if(!ADDRESS_REGEX.test(state)) throw 'Please enter valid state.'
        {
            this.state = state;
        }
        if(!ZIP_REGEX.test(zip)) throw 'Please enter valid pincode.'
        {
            this.zip = zip;
        }
        if(!PHONE_NUMBER_REGEX.test(phoneNumber)) throw 'Please enter valid phone number.'
        {
            this.phoneNumber = phoneNumber;
        }
        if(!EMAIL_REGEX.test(email)) throw 'Please enter valid email ID.'
        {
            this.email = email;
        }
    }
    toString() {
        return "First name: " + this.firstName + "\nLast name: " + this.lastName + "\nAddress: " + this.address + "\nCity: " +
         this.city + "\nState: " + this.state + "\nZip: " + this.zip + "\nPhone number: " + this.phoneNumber + "\nEmail: " + this.email;
    }
}

function addContact(){
    let firstName = prompt("Enter Firstname: ");
    let lastName = prompt("Enter Lastname: ");
    let address = prompt("Enter Address: ");
    let city = prompt("Enter City name: ");
    let state = prompt("Enter State name: ");
    let zip = prompt("Enter pincode: ");
    let phoneNumber = prompt("Enter Phone number: ");
    let emailId = prompt("Enter email id: ");
    try{
        let contact = new Contact(firstName,lastName,address,city,state,zip,phoneNumber,emailId);
        contactBookArray.push(contact);
    }catch(Exception){
        console.log(Exception);
    }
}

function editContact(firstName){
    let contact;
    for(let i = 0; i < contactBookArray.length; i++){
        if(contactBookArray[i].firstName == firstName){
            contact = contactBookArray[i];
            let input = 1;
            while(input != 0){
                console.log("1. Address ");
                console.log("2. City ");
                console.log("3. State");
                console.log("4. Zip");
                console.log("5. Phone number");
                console.log("6. Email ");
                console.log("0. Exit ");
                input = prompt("Enter Your Choice: ");
                input = parseInt(input);
                switch (input) {
                    case 1: let address_edit = prompt("Enter the address: ");
                            contact.address = address_edit;
                            break;
                    case 2: let city_edit = prompt("Enter the city: ");
                            contact.city = city_edit;
                            break;
                    case 3: let state_edit = prompt("Enter the state: ");
                            contact.state = state_edit;
                            break;
                    case 4: let zip_edit = prompt("Enter the pincode: ");
                            contact.zip = zip_edit;
                            break;
                    case 5: let phone_edit = prompt("Enter the phone number: ");
                            contact.phoneNumber = phone_edit;
                            break;
                    case 6: let mail_edit = prompt("Enter the email: ");
                            contact.email = mail_edit;
                            break;
                    case 0: input = 0;
                    default: console.log("Choose Correct Option");
                }
            }
        }
        else
            console.log("Contact is not present");
    }
}
function show(){
    for(let i = 0; i < contactBookArray.length; i++)
        console.log(contactBookArray[i].toString(),"\n");
}
function deleteContact(firstName){
    let flag = 0;
    for(let i = 0; i < contactBookArray.length; i++)
        if(contactBookArray[i].firstName == firstName){
            contactBookArray.splice(i, 1);
            flag = 1;
        }
    if(flag == 0)
        console.log("Contact Not Present ");
}
let input = 1;
let firstName="null";
while(input != 0){
    console.log("1. Add Contacts");
    console.log("2. Edit Contacts");
    console.log("3. Show Contacts");
    console.log("4. Delete Contacts");
    console.log("5. Count Contacts");
    console.log("0. Exit");
    input = prompt("Enter Your Choice: ");
    input = parseInt(input);
    switch(input){
        case 1: addContact();
                break;
        case 2: firstName = prompt("Enter first name for edit");
                editContact(firstName);
                break;
        case 3: show();
                break;
        case 4: firstName = prompt("Enter first name for edit");
                deleteContact(firstName);
                break;
        case 5: console.log("Number of Contacts: "+contactBookArray.reduce(contact=>contact + 1, 0));
                break;
        case 0: input = 0;
                break;
        default : console.log("You have enter wrong choice");
    }
}