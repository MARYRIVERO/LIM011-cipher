/* eslint-disable no-mixed-operators */
window.cipher = {
  encode: (myString, parameter) => {
    const offset = parseInt(parameter, 10);
    let numberOfTheLetter = '';
    let formule = '';
    let newLetter = '';
    let encriptado = '';
    for (let index = 0; index < myString.length; index += 1) {
      numberOfTheLetter = myString.charCodeAt(index);

      if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) {
        formule = ((numberOfTheLetter - 65 + offset) % 26 + 65);
        newLetter = String.fromCharCode(formule);
        encriptado += newLetter;
      } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) {
        formule = ((numberOfTheLetter - 97 + offset) % 26 + 97);
        newLetter = String.fromCharCode(formule);
        encriptado += newLetter;
      } else if (numberOfTheLetter === 32) {
        encriptado += ' ';
      } else if (numberOfTheLetter >= 48 && numberOfTheLetter <= 57) {
        formule = ((numberOfTheLetter - 48 + offset) % 10 + 48);
        newLetter = String.fromCharCode(formule);
        encriptado += newLetter;
      }
    }
    return encriptado;
  },

  decode: (myString, parameter) => {
    const offset = parseInt(parameter, 10);
    let numberOfTheLetter = '';
    let formule = '';
    let theNewLetter = '';
    let desencriptado = '';

    for (let index = 0; index < myString.length; index += 1) {
      numberOfTheLetter = myString.charCodeAt(index);
      if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) {
        formule = ((numberOfTheLetter + 65 - offset) % 26 + 65);
        theNewLetter = String.fromCharCode(formule);
        desencriptado += theNewLetter;
      } else if (numberOfTheLetter >= 97 && numberOfTheLetter <= 122) {
        formule = ((numberOfTheLetter + 85 - offset) % 26 + 97);
        theNewLetter = String.fromCharCode(formule);
        desencriptado += theNewLetter;
      } else if (numberOfTheLetter === 32) {
        desencriptado += ' ';
      } else if (numberOfTheLetter >= 48 && numberOfTheLetter <= 57) {
        formule = ((numberOfTheLetter + 52 - offset) % 10 + 48);
        theNewLetter = String.fromCharCode(formule);
        desencriptado += theNewLetter;
      }
    }
    return desencriptado;
  },
};
