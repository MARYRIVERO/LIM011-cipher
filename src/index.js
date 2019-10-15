
const btn = document.getElementById('btn');
const secondView = document.getElementById("secondView");
const firstView = document.getElementById("firstView");
let parameter = '';


//Dando funcionalidad a mi primer botón

btn.addEventListener('click', () => {
  parameter = document.getElementById("parameter").value;
  secondView.classList.remove("ocultar");  
  firstView.classList.add("ocultar");
 
});

const twoBtn = document.getElementById("twoBtn");
const thirdView = document.getElementById("thirdView");

//Dando funcionalidad a mi segundo botón y resultados en mi tercera vista

twoBtn.addEventListener('click', () => {
  const fullName = document.getElementById("fullName").value;
  const numberIdentity= document.getElementById("numberIdentity").value;
  const address= document.getElementById("address").value;
  const phone= document.getElementById("phone").value;

  const fullNameCripter= window.cipher.encode(fullName,parameter);
  document.getElementById("fullNameRes").value = fullNameCripter;

  const numberIdentityCripter= window.cipher.encode(numberIdentity,parameter);
  document.getElementById("numberIdentityRes").value = numberIdentityCripter;

  const addressCripter= window.cipher.encode(address,parameter);
  document.getElementById("addressRes").value = addressCripter;

  const phoneCripter= window.cipher.encode(phone,parameter);
  document.getElementById("phoneRes").value = phoneCripter;


  //Mostrando y ocultando pantallas

  thirdView.classList.remove("ocultar");
  secondView.classList.add("ocultar");
  });

const threeBtn = document.getElementById("threeBtn");
const quarterView = document.getElementById("quarterView");

//Dando funcionalidad a mi tercer botón
threeBtn.addEventListener('click', () => {
  const fullNameRes= document.getElementById("fullNameRes").value;
  const numberIdentityRes= document.getElementById("numberIdentityRes").value;
  const addressRes= document.getElementById("addressRes").value;
  const phoneRes= document.getElementById("phoneRes").value;


  const fullNameDecripter= window.cipher.decode(fullNameRes,parameter);
  document.getElementById("fullNameDecode").value = fullNameDecripter;

  const numberIdentityDecripter= window.cipher.decode(numberIdentityRes,parameter);
  document.getElementById("numberIdentityDecode").value = numberIdentityDecripter;

  const addressDecripter= window.cipher.decode(addressRes,parameter);
  document.getElementById("addressDecode").value = addressDecripter;

  const phoneDecripter= window.cipher.decode(phoneRes,parameter);
  document.getElementById("phoneDecode").value = phoneDecripter;

//Mostrando y ocultando pantallas
  quarterView.classList.remove("ocultar");
  thirdView.classList.add("ocultar");
});

//Dando funcionalidad a mi cuarto botón
const quarterBtn = document.getElementById("quarterBtn");
quarterBtn.addEventListener('click', () => {

  firstView.classList.remove("ocultar");
  quarterView.classList.add("ocultar");
  //Refrescando mi primer botón //
  const retornar=document.querySelector('input[id= "parameter"]');
  retornar.value= "";
  //Refrescando mi segunda vista //
  const retornarDatos=document.querySelector('input[id="fullName"]');
  retornarDatos.value= "";
  const retornarDocument=document.querySelector('input[id="numberIdentity"]');
  retornarDocument.value= "";
  const retornarAdress=document.querySelector('input[id="address"]');
  retornarAdress.value= "";
  const retornarPhone=document.querySelector('input[id= "phone"]');
  retornarPhone.value= "";
});
