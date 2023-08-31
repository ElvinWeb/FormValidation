//First-Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");
//Last-Name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");
//Phone
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");
//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");
//Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");
//Verify Password
let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");
//submit button
let submitButton = document.getElementById("submit-button");
//valid and invalid classes
let validClasses = document.querySelectorAll(".valid");
let invalidClasses = document.querySelectorAll(".error");

//Password Verification
const passwordVerify = (password) => {
  const regex =
    /^(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
  return regex.test(password) && password.length > 8;
};
//Text Verification (if input contains only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(text);
};
//PhoneNumber Verification
const phoneVerify = (number) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(number);
};
//Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{3,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};

//for empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReferance,
  emptyErrorReferance,
  otherErrorReference
) => {
  if (!inputReferance.value) {
    //empty is null/empty
    emptyErrorReferance.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReferance.classList.add("error");
  } else {
    //input has some value
    emptyErrorReferance.classList.add("hide");
  }
};
//For error styling and displaying error message
const errorUpdate = (inputReferance, errorReferance) => {
  errorReferance.classList.remove("hide");
  inputReferance.classList.remove("valid");
  inputReferance.classList.add("error");
};
//for no errors and valid styling
const validInput = (inputReferance) => {
  inputReferance.classList.remove("error");
  inputReferance.classList.add("valid");
};
//first Name validation
firstNameInput.addEventListener("input", () => {
  if (textVerify(firstNameInput.value)) {
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    errorUpdate(firstNameInput, firstNameError);
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});
//Last Name validation
lastNameInput.addEventListener("input", () => {
  if (textVerify(lastNameInput.value)) {
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
  }
});
//Phone number validation
phoneInput.addEventListener("input", () => {
  if (phoneVerify(phoneInput.value)) {
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
    errorUpdate(phoneInput, phoneError);
    emptyUpdate(phoneInput, emptyPhoneError, phoneError);
  }
});
//Email adress validation
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});
//Password validation
passwordInput.addEventListener("input", () => {
  if (passwordVerify(passwordInput.value)) {
    passwordError.classList.add("hide");
    validInput(passwordInput);
  } else {
    errorUpdate(passwordInput, passwordError);
    emptyUpdate(passwordInput, emptyPasswordError, passwordError);
  }
});
//confirm password validation
verifyPasswordInput.addEventListener("input", () => {
  if (verifyPasswordInput.value === passwordInput.value) {
    verifyPasswordError.classList.add("hide");
    validInput(verifyPasswordInput);
  } else {
    errorUpdate(verifyPasswordInput, verifyPasswordError);
    emptyUpdate(passwordInput, emptyVerifyPasswordError, verifyPasswordError);
  }
});

//Submit button and show alert message
submitButton.addEventListener("click", () => {
  if (validClasses.length == 6 && invalidClasses.length == 0) {
    alert("Success");
    console.log(validClasses.length)
  } else {
    alert("Error");
  }
});
