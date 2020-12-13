var prompt = require('prompt-sync')();
const NAME_REGEX = RegExp('^[A-Z]{1}[a-z]{2,}$');
const ADDRESS_REGEX = RegExp('^[a-zA-Z]{4,}$');
const ZIP_REGEX = RegExp('^[0-9]{6}$');
const PHONE_NUMBER_REGEX = RegExp('^[+]?[0-9]{2}[ ][0-9]{10}$'); 
const EMAIL_REGEX=RegExp('^[a-zA-Z][a-zA-Z0-9]*([.+-][a-zA-Z0-9]+)*(@[a-zA-Z0-9]+[.][a-zA-Z0-9]{2,})([.][a-zA-Z]{2,4})?$');

class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
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
var firstName = prompt("Enter your first name : ");
validateFirstName(firstName);
var lastName = prompt("Enter your last name : ");
validateLastName(lastName);
var address = prompt("Enter your address : ");
validateAddress(address);
var city = prompt("Enter your city : ");
validateCity(city);
var state = prompt("Enter your state : ");
validateState(state);
var zip = parseInt(prompt("Enter your  zip code : "));
validateZIP(zip);
var phoneNumber = parseInt(prompt("Enter your phone number : "));
validatePhoneNumber(phoneNumber);
var email = prompt("Enter your email : ");
validateEmail(email);