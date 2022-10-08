import {
  lowercaseRegex,
  minLengthRegex,
  numericRegex,
  specialCharsRegex,
  uppercaseRegex,
} from "../../common/Constants.js";

const password = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.querySelector("#toggleBtn img");
const validationBox = document.querySelector(".validation");

const urlToggleIconShow = "./assets/image/form/Show.png";
const urlToggleIconHide = "./assets/image/form/Hide.png";

const lowerCase = document.getElementById("lower_case");
const upperCase = document.getElementById("upper_case");
const number = document.getElementById("number");
const specialChar = document.getElementById("special_char");
const minLength = document.getElementById("min_length");

//toggle show/hide password
toggleBtn.onclick = () => {
  password.type === "password"
    ? (password.setAttribute("type", "text"),
      toggleBtn.classList.add("hide"),
      (toggleIcon.src = urlToggleIconHide))
    : (password.setAttribute("type", "password"),
      toggleBtn.classList.remove("hide"),
      (toggleIcon.src = urlToggleIconShow));
};

//validation
password.onkeyup = (e) => {
  // lowerCase validation check
  lowercaseRegex.test(e.target.value)
    ? lowerCase.classList.add("valid")
    : lowerCase.classList.remove("valid");

  // uppercase validation check
  uppercaseRegex.test(e.target.value)
    ? upperCase.classList.add("valid")
    : upperCase.classList.remove("valid");

  // number validation check
  numericRegex.test(e.target.value)
    ? number.classList.add("valid")
    : number.classList.remove("valid");

  //  specialChars validation check
  specialCharsRegex.test(e.target.value)
    ? specialChar.classList.add("valid")
    : specialChar.classList.remove("valid");

  // minLength validation check
  minLengthRegex.test(e.target.value)
    ? minLength.classList.add("valid")
    : minLength.classList.remove("valid");
};
