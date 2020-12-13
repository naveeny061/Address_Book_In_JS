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
}
function validateFirstName(firstName) {
    if (!NAME_REGEX.test(firstName)) {
        console.log('Please enter first name in valid format.');
        return false;
    }
}
function validateLastName(lastName) {
    if (!NAME_REGEX.test(lastName)) {
        console.log('Please enter last name in valid format.');
        return false;
    }
}
function validateAddress(address) {
    if (!ADDRESS_REGEX.test(address)) {
        console.log('Please enter address in valid format.');
        return false;
    }
}
function validateCity(city) {
    if (!ADDRESS_REGEX.test(city)) {
        console.log('Please enter city in valid format.');
        return false;
    }
}
function validateState(state) {
    if (!ADDRESS_REGEX.test(state)) {
        console.log('Please enter state in valid format.');
        return false;
    }
}
function validateZIP(zip) {
    if (!ZIP_REGEX.test(zip)) {
        console.log('Please enter zip in valid format.');
        return false;
    }
}
function validatePhoneNumber(phoneNumber) {
    if (!PHONE_NUMBER_REGEX.test(phoneNumber)) {
        console.log('Please enter phone number in valid format.');
        return false;
    }
}
function validateEmail(email) {
    if (!EMAIL_REGEX.test(email)) {
        console.log('Please enter email in valid format.');
        return false;
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
addContact();