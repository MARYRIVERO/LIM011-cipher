window.cipher = {
  encode: (myString, parameter) => {
    const offset = parseInt(parameter, 10);
    let numberOfTheLetter = '';
    let formule = '';
    let newLetter = '';
    let encriptado = '';
    for (let index = 0; index < myString.length; index += 1) {
      numberOfTheLetter = myString.charCodeAt(index) //numero de la letra en el codigo ASCII

      if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) { 
      formule =  (numberOfTheLetter - 65 + offset) % 26 + 65; //almacena fórmula de cifrado que se utiliza
      newLetter= String.fromCharCode(formule); // almacena valor de la nueva letra cifrada
      encriptado += newLetter // formar el string cifrado
    
     }else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122) { // valor UNICODE de letras minúsculas en ASCII
      formule = (numberOfTheLetter - 97 + offset) % 26 + 97; // fórmula de cifrado Cesar
      newLetter = String.fromCharCode(formule); // valor de letra cifrada
      encriptado += newLetter; // formar el string cifrado

     }else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
       encriptado += ' ';  // añadir espacio en string cifrado

     }else if(numberOfTheLetter >= 48 && numberOfTheLetter <=57){ // valor UNICODE de números en ASCII
      formule = (numberOfTheLetter - 48 + offset) % 10 + 48; // fórmula de cifrado Cesar
      newLetter = String.fromCharCode(formule); // valor de letra cifrada
      encriptado += newLetter; // formar el string cifrado
       
      }
    }
    return encriptado;   // Retorna el valor de la cadena cifrada
  },

  decode:(myString, parameter)=> {
    parameter = parseInt(parameter) 
    let numberOfTheLetter ="";
    let formule = "";
    let theNewLetter = "";
    let desencriptado = "";

  for (let index = 0; index < myString.length; index++) {   //recorrer el string del usuario
      numberOfTheLetter = myString.charCodeAt(index);  //valor UNICODE de la letra en el código ASCII
     
    if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90){  //saber si la letra está en mayúscula

      formule = (numberOfTheLetter + 65 - parameter) % 26 + 65 // formula para descifrar
      theNewLetter = String.fromCharCode(formule); // obtener el valor de la letra descifrada
      desencriptado += theNewLetter; // formar la cadena descifrada

    }else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122){ // saber si la letra está en minúscula

      formule = ( numberOfTheLetter + 85 - parameter) % 26 + 97; // formula para descifrar
      theNewLetter = String.fromCharCode(formule); // obtener el valor de la letra descifrada
      desencriptado += theNewLetter; // formar la cadena descifrada
 
    }else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
        
      desencriptado += ' '; // añadir un espacio en string decifrado

    } else if(numberOfTheLetter >= 48 && numberOfTheLetter <=57){ // valor UNICODE de números en ASCII
       
      formule = ( numberOfTheLetter + 52 - parameter) % 10 + 48; // fórmula de cifrado Cesar
      theNewLetter = String.fromCharCode(formule); // valor de letra cifrada
      desencriptado += theNewLetter; // formar el string cifrado

     } 
     }
      return desencriptado;   // Retorna el valor de la cadena cifrada
    }
   };


