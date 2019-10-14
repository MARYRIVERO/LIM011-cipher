window.cipher = {
  encode:(myString, param)=> {
    let encriptado = "";
    param = parseInt(param) 

  for (let index = 0; index < myString.length; index++) { // recorrer el string 
     
      let numberOfTheLetter = myString.charCodeAt(index) //numero de la letra en el codigo ASCII

      if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90) { 
      const formule =  (numberOfTheLetter - 65 + param) % 26 + 65; //almacena fórmula de cifrado que se utiliza
      let newLetter= String.fromCharCode(formule); // almacena valor de la nueva letra cifrada
      encriptado += newLetter // formar el string cifrado
    
     }else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122) { // valor UNICODE de letras minúsculas en ASCII
       const formule = ( numberOfTheLetter - 97 + param) % 26 + 97; // fórmula de cifrado Cesar
       let newLetter = String.fromCharCode(formule); // valor de letra cifrada
       encriptado += newLetter; // formar el string cifrado

     }else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
       encriptado += ' ';  // añadir espacio en string cifrado

     }else if((numberOfTheLetter >= 48 && numberOfTheLetter <=57)){ // valor UNICODE de números en ASCII
      const formule = ( numberOfTheLetter - 48 + param) % 10 + 48; // fórmula de cifrado Cesar
      let newLetter = String.fromCharCode(formule); // valor de letra cifrada
      encriptado += newLetter; // formar el string cifrado
       
      }else
        break;
    }
    return encriptado;   // Retorna el valor de la cadena cifrada
  },

 decode:(myString, param)=> {
  let desencriptado = "";
  param = parseInt(param) 

   for (let index = 0; index < myString.length; index++) {   //recorrer el string del usuario
      let numberOfTheLetter = myString.charCodeAt(index);  //valor UNICODE de la letra en el código ASCII
     

      if (numberOfTheLetter >= 65 && numberOfTheLetter <= 90){  //saber si la letra está en mayúscula
       

        let formule = (numberOfTheLetter + 65 - param) % 26 + 65 // formula para descifrar
        let theNewLetter = String.fromCharCode(formule); // obtener el valor de la letra descifrada
        desencriptado += theNewLetter; // formar la cadena descifrada

      }else if (numberOfTheLetter >= 97 && numberOfTheLetter <=122){ // saber si la letra está en minúscula
        

        const formule = ( numberOfTheLetter + 85 - param) % 26 + 97; // formula para descifrar
        let theNewLetter = String.fromCharCode(formule); // obtener el valor de la letra descifrada
        desencriptado += theNewLetter; // formar la cadena descifrada
        
 
      }else if(numberOfTheLetter === 32){ // verificar si es un espacio vacio
        
        desencriptado += ' '; // añadir un espacio en string decifrado

      } else if((numberOfTheLetter >= 48 && numberOfTheLetter <=57)){ // valor UNICODE de números en ASCII
       
          const formule = ( numberOfTheLetter + 52 - param) % 10 + 48; // fórmula de cifrado Cesar
          let newLetter = String.fromCharCode(formule); // valor de letra cifrada
          desencriptado += newLetter; // formar el string cifrado
      } else {
       
          break;
        }
      }
      return desencriptado;   // Retorna el valor de la cadena cifrada
    }
   };


