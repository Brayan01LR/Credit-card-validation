let cardNumber = document.getElementById("cardNumber");
let message = document.getElementById("message");
var verification = 0;
var reverseNumber;
var digit;
var chain;

cardNumber.addEventListener('keyup', (e) => {
  let inputvalue = e.target.value;

  //REGULAR EXPRESSIONS
  //Eliminate blank and empty spaces
  cardNumber.value = inputvalue.replace(/\s/g, '')
    //Delete letters
    .replace(/\D/g, '')
    //put space every 4 digits
    .replace(/([0-9]{4})/g, '$1 ')

  chain = cardNumber.value;

})

function createNewArray() {
  var element = new Array();
  //Creating an arrangement to save the user entered
  digit = new Array();
  for (let i = 0; i < cardNumber.value.length; i++) {
    digit[i] = cardNumber.value[i];
  }

  //Remove white array space from numbers
  for (let i = 0; i <= digit.length; i++) {
    if (digit[i] == " ") {
      digit.splice(i, 1);
    }
  }

  //The order of the arrangement is invested
  reverse = digit.reverse();

  //The Array Element is assigned the reverse order of Targeta.
  element = reverse;
  for (let i = 0; i < digit.length; i++) {

    if (i % 2) {
      element[i] = reverse[i] * 2;
    } else {

    } element[i] = reverse[i] * 1;
  }
  convertNumbers(element);
}

function convertNumbers(arrayParameter) {
  for (let i = 0; i <= arrayParameter.length; i++) {

    if (i % 2) {

      if (arrayParameter[i] >= 10) {
        switch (arrayParameter[i]) {
          case 10: arrayParameter[i] = 1;
            break;
          case 12: arrayParameter[i] = 3;
            break;
          case 14: arrayParameter[i] = 5;
            break;
          case 16: arrayParameter[i] = 7;
            break;
          case 18: arrayParameter[i] = 9;
            break;
        }
      }
    }
  }
}


function sumNumbers() {
  for (var i = 0; i < digit.length; i++) {
    verification += digit[i];
  }
  conditionsMessage();
}

function clearInputCard() {
  cardNumber.value = null;
  verification = null;
  reverseNumber = null;
  digit = null;
  chain = null;
}

function retry() {
  verification = null;
  reverseNumber = null;
  digit = null;
  chain = null;
}


function conditionsMessage() {


  if (!cardNumber.value.trim() || cardNumber.length == 0) {
    message.innerHTML = "The field cannot be empty"
  } else {
    if (verification % 10 === 0) {
      message.innerText = "Card verified successfully"
      message.classList.add("text-success");
      message.classList.remove("text-danger");
    } else {
      message.innerText = "Wrong card number"
      message.classList.add("text-danger");
    }
  }
  if (chain.length > 20) {
    message.innerText = "Card exceeds character limit";
  } else if (chain.length < 18) {
    message.innerText = "The card must have at least 15 characters";
    message.classList.add("text-danger");
  }
}


function verifyCard() {
  createNewArray();
  sumNumbers();
  conditionsMessage();
}