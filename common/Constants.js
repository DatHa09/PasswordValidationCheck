export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const uppercaseRegex = /(?=.*[A-Z])/;
export const lowercaseRegex = /(?=.*[a-z])/;
export const numericRegex = /(?=.*[0-9])/;
export const specialCharsRegex =
  /(?=.*[!\@\#\$\%\^\&\*\(\)\_\-\=\+\?\>\<\.\,])/;
export const minLengthRegex = /(?=.{8,})/g;
export const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
