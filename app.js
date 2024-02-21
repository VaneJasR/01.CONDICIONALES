
//Ejercicio 1
let pregunta
pregunta = prompt('¿Eres bellisimo/a?');

if (pregunta == "si"){
console.log("Ciertamente")
} 
else {
console.log("No te creo")};

//Ejercicio 2
let numero_
numero_ = Number(prompt ('Dime un número'))
 if (numero_ % 2 == 0) {
  console.log(numero_, "Es divisible entre 2")
 }
else {
  console.log( numero_, "No es divisible entre 2")
}


//Ejercicio 3 
let numero2
numero2 = Number(prompt ('Dime un número'))
 if (numero2 % 2 == 0) {
  alert("Es un número par");
}
else {
  alert("No es un número par")
}

//Ejercicio 4 

let n_cliente
n_cliente = Number(prompt("Adivina el número y gana"))
if (n_cliente == 1000){
  console.log("Ganaste un premio")
}
else {
  console.log("Lo sentimos, sigue participando")
}

//Ejercicio 5
let numero_1, numero_2
numero_1 = Number(prompt("Pon un número"))
numero_2 = Number(prompt("Pon un segundo número"))
if (numero_1 != numero_2){
  if(numero_1 > numero_2)
  {
  alert(numero_1 + " es mayor que "+numero_2)
  }
else {
  alert(numero_2+" es mayor que "+numero_1)
}
}
else {
  alert(numero_1+" y "+numero_2+" son iguales")
} 


//Ejercicio 6
let a,b,c
a = Number(prompt("Primer número"))
b = Number(prompt("Segundo número"))
c = Number(prompt("tercer número"))
if (a != b , b!= c, c!= a){
if (a>=b,c<=a){
  alert(a+" es el núnero mayor")
}
if (b>=a,b=c){
  alert(b+" es el núnero mayor")
}
else{
  alert(c+" es el núnero mayor")
}}
else{
  alert("Los 3 son iguales")}


//Ejercicio 7 ***** corrregir esta mal 
let dia 
dia = Boolean(prompt("Menciona un dia de la semana"))

switch(dia){
    case 1:
    dia == 'lunes'
      alert("exelente incio de semana😊")
    break

    case 'viernes':
      alert("Por fin viernes🥳")
    break
    case 'sabado','domingo':
    alert("Ya descansa🤨")

    break
    default:
      alert("Vamos ya falta poco para el fin de semana😒")
}


//Ejercicio 8 
let calificacion
calificacion = Number(prompt("ingrese su calificacion del 1 al 10"))
if(calificacion >5 ){
  if(calificacion == 6 && calificacion ==7 && calificacion ==8){
    alert("Regular😝")
  } 
  if(calificacion == 9){
    alert("Bien😊") 
  }
  else {
    alert("Excelente🥳")
  }
}
else {
  alert("reprobado😓")
}

//Ejercicio 9 
alert("Bienvenidos a McDonald's🍟"+ " Usted esta en el area para ordenar helados🍦");
let helado, topping 
let hel = 50, oreo = 10, kitkat = 15, brownie = 20

helado = prompt("Desea agregar topping para su helado")
if(helado == "si" ){
  topping = prompt("Que topping deseaa agregar")
  if(topping =='oreo' || topping =='kitkat' || topping =='brownie'){
  if(topping == "oreo")
    { alert("su total es de " + (hel+oreo)+"MXN")}
  if (topping == "kitkat")
    {alert( "su total es de " + (hel+kitkat)+"MXN")}
  if (topping == "brownie")
    {alert( "su total es de " + (hel+brownie) +"MXN")}
    }
    else{
      alert("no tenemos este topping, lo sentimos")}
  }
else {
  alert("su total es de " + hel+ "MXN")
}


//Ejercicio 10 
let curso, beca
let cur = 4999, car = 3999, mas = 2999
let fb = 0.20, go = 0.15, jes =0.50
curso = prompt("🤖Bienvenidos a educación en tecnología🖥️🤓 contamos con 3 diferentes programas🥳 ( COURSE, CARRERA Y MASTER)👾🤖 " +" INGRESE EL PROGRAMA DE SU INTERES" )

if (curso == 'course' || curso == 'carrera' || curso =='master'){
  beca = prompt("Cuentas con alguna beca") 
  if(curso == 'course'){
    if (beca== 'facebook' || beca == 'google' || beca == 'jesua'){
      if (beca == 'facebook'){
        alert ("El costo total de course es de"+ (cur*fb)*2+"MXN")
      }
      if (beca =='google'){
        alert ("El costo total de course es de"+ (cur*go)*2+"MXN")
      }
      if (beca == 'jesua'){
        alert ("El costo total de course es de"+ (cur*jes)*2+"MXN")
      }}
    else {
      alert("El costo total del curso va a ser de" + (cur*2)+"MXN")
    }
  }
  if (curso == 'carrera'){
    if (beca== 'facebook' || beca == 'google' || beca == 'jesua'){
      if (beca == 'facebook'){
        alert("El costo total de course es de"+ (car*fb)*2+"MXN")
      }
      if (beca =='google'){
        alert ("El costo total de course es de"+ (car*go)*2+"MXN")
      }
      if (beca == 'jesua'){
        alert ("El costo total de course es de"+ (car*jes)*2+"MXN")
      }}
      else {
        alert("El costo total del curso va a ser de" + (car*2)+"MXN")
      } 
  }
  if (curso == 'master'){
    if (beca== 'facebook' || beca == 'google' || beca == 'jesua'){
      if (beca == 'facebook'){
        alert("El costo total de course es de"+ (mas*fb)*2+"MXN")
      }
      if (beca =='google'){
        alert ("El costo total de course es de"+ (mas*go)*2+"MXN")
      }
      if (beca == 'jesua'){
        alert ("El costo total de course es de"+ (mas*jes)*2+"MXN")
      }}
      else {
        alert("El costo total del curso va a ser de" + (mas*2)+"MXN")
      } 
  }
  }
else {
  alert("no esta disponible")
}

//Ejercicio 11 
//total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.
//percio kilometro
let veiculo
let coche = 0.20, moto = 0.10, autobus = 0.5
//distancia recorrida 
let distancia 
// extra x litros consumidos 
let litro 

veiculo = prompt("Que veiculo tiene (coche🚗, moto🏍️, autobus🚌")
distancia= prompt("distancia recorrida🛣️")
litro = prompt("cuantos litros de gasolina ha consumido durante su recorrido🚗")
if (veiculo == "coche" || veiculo =="moto" || veiculo=="autbus"){
if (litro <=0 || litro>=100){
  if (veiculo == "coche") {
    alert("El total a pagar es de "+ ((distancia*coche)+5)+"MXN")
  }
  if (veiculo == "moto"){
    alert("El total a pagar es de "+ ((distancia*moto)+5)+"MXN")
  }
  else {
    alert("El total a pagar es de "+ ((distancia*autobus)+5)+"MXN")
  }
}
if (litro <100){
  if (veiculo == "coche") {
    alert("El total a pagar es de "+ ((distancia*coche)+10)+"MXN")
  }
  if (veiculo == "moto"){
    alert("El total a pagar es de "+ ((distancia*moto)+10)+"MXN")
  }}
  else {
    alert("El total a pagar es de "+ ((distancia*autobus)+10)+"MXN")
  }

}
else {
  alert("no se encuentran datos de ese veiculo")
}


