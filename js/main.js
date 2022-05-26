//ALGORITMO 1
let a = parseInt(prompt("Inserte numero 1 del 1 al 100"));
let b = parseInt(prompt("Inserte numero 2 del 1 al 100"));
let c = parseInt(prompt("Inserte numero 3 del 1 al 100"));

const isNumberValidated = (number) => number >= 1 && number <= 100 //Funcion de retorno rapido verdadero falso
if (isNumberValidated(a) && isNumberValidated(b) && isNumberValidated(c)) {
    console.log("Numero valido");
    if (a>b && a>c){
        console.log("El numero mayor de los tres es " + a)
    }   else if
        (b>a && b>c)
        console.log("El numero mayor de los tres es " +b)
        else{
            console.log("El numero mayor de los tres es " +c)
    }
} else {
    console.log("Numero no valido, ya mamorrinzon");
}

    
//ALGORITMO 2
// let a = prompt("Inserte numero 1 del 1 al 100");
// // if(a<1 || a>100){
// //     console.log("Tu primer número no entra en el rango");
// // }
// let b = prompt("Inserte numero 2 del 1 al 100");
// let c = prompt("Inserte numero 3 del 1 al 100");

// if (a<b && a<c){
//     console.log("El numero menor de los tres es " + a)
// } else if
//     (b<a && b<c)
//     console.log("El numero menor de los tres es " +b)
 
//     else{
//         console.log("El numero menor de los tres es " +c)
// }
    
// //ALGORITMO 4
// let a = prompt("Inserte un numero del 100 al 200");

// if (a%2===0) {
//     console.log("Numero validado");
// } else { console.log("Numero no valido")
    
// }
// if (a%3==0) {
//     console.log("El numero si es multiplo de 3");
// }    else{
//     console.log("El numero no es multiplo de 3");
//     }
    
//ALGORITMO 5
// let a =parseFloat(prompt("Inserte numero a")); //parseFloat para convertir la cadena en numerico y poder sumarlos
// let b = parseFloat(prompt("Inserte numero b"));
// let c = parseFloat(prompt("Inserte numero c"));

// let d = b+c;
// let e = a+c;
// let f = a+b;

// if (a==d) {
//     console.log("El numero " + a +" es la suma de b y c")
    
// } else if
//     (b==e)
//     console.log("El numero "+b+" es la suma de a + c")

//     else if
//     (c==f)
//     console.log("El numero "+c+" es la suma de a + b")

//     else{
//         console.log("Ningun numero es resultado de la suma de los otros numeros")
//     }

//ALGORITMO 6
// let a=parseFloat(prompt("Inserte un numero"))

// if(a%2==0){
//     console.log("El numero "+a+" es par")
// } else{
//     console.log("El numero "+a+" es impar")
// }