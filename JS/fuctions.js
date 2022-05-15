// document.body.onload = function(){
//     alert("hola mundo")
// }

// Este es una algoritmo de operaciones básicas
function operacionesBasicas (){
    var A = 0;
    var B = 0;
    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var división = 0;

    alert("Este algoritmo realiza una suma, resta, multiplicación y división de dos valores ingresados por el usuario");

    A = parseInt(prompt("Por favor ingrese el primer valor ha operar:  "));
    B = parseInt(prompt("Por favor ingrese el segundo valor ha operar  "));

    suma = A + B;
    resta = A - B;
    multiplicacion = A * B;
    división = A / B;

    alert("El resultado de la suma es:  " + suma);
    alert("El resulta de la resta es:  " + resta);
    alert("El resultado de la multiplicación es:  " + multiplicacion);
    alert("El resultado de la divisiós es:  " + división);

}
// Este es un algoritmo de un numero mayor se dos valores
function numeroMayor (){
    var a = 0;
    var b = 0;

    alert("Este es un algoritmo que describe el numero mayor de dos numeros");

    a = parseInt(prompt("Por favor ingrese el primer número "));
    b = parseInt(prompt("Por favor ingrese el segundo número "));

    if ( a > b )
    alert ("El número mayor es  " + a);
    else if ( a < b)
    alert ("El número mayor es:  " + b);
    else 
    alert ("Los números son iguales:  " );

}
//Este es un numero menor de tres valores
function menordetresnumeros (){
    var a = 0;
    var b = 0;
    var c = 0;

    alert("Este es un algoritmo que ejecuta el menor de tres números");

    a = parseInt(prompt("Por favor ingrese el primer número"));
    b = parseInt(prompt("Por favor ingrese el segundo número"));
    c = parseInt(prompt("Por favor ingrese el tercer número"));


    if (( a < b) && ( a < c )){
    alert ("El número menor de los tres números es: " + a);
    }else if (( b < a) && ( b < c)){
    alert ("El número menor de los tres números es: " + b);
    }else if (( c < a) && ( c < b)){
    alert ("El número menor de los tres números es: " + c);
    }else {
    alert ("Los números son iguales: " );
    }

}
// Este es un algoritmo de ingresar un numero y decir si es impar o par
function pareimpar (){
   var w = 0;

    alert("Este es un algoritmo que cuando ingrese un número le diga si es par o impar");

    w = parseInt(prompt("Por favor ingrese el número que desea saber si es par o impar"));

   if (w%2 == 0){
   alert ("El numero es par:  "+ w);
   }else {
    alert ("El número es impar:  "+ w);
   }
}
//Este es un algoritmo que halla el cuadrado de un número
function cuadradonumero (){
    var b = 0;
    var c = 0;
    

    alert("Este es un algoritmo que ejecuta el cuadrado de un número");

    b = parseInt(prompt("Por favor ingrese el número que desea hallar el cuadrado"));

    c = b * b
    alert ("El número elevado al cuadrado es:  " + c);
    
}
//Este es un algoritmo que halla el cuadrado de un numero
function areatriangulo (){
    var b = 0;
    var a = 0;
    var c = 0;

    alert("Este es un algoritmo que halla el area de un triangulo");

    b = parseInt(prompt("Por favor ingrese la base del triangulo"));
    a = parseInt(prompt("Por favor escriba la altura del triangulo"));

    c = (b*a)/2
    alert ("El area del triangulo es:  " + c);
}

function centimetrosametros (){
    var m = 0;
    var c = 0;

    alert("Este es un algoritmo que determina los centimetros de un valor dado en metros");

    m = parseInt(prompt("Por favor ingrese los metros que desea convertir a centimetros"));

    c = m*100
    alert ("Los centimetros son:  " + c )

}

function cantidaddecifras (){
    var num = 0;
    var num_cifras = 1;

    alert("Este es un algoritmo que determina el número de cifras cuando se ingresa un valor ");

    num = parseInt(prompt("Por favor ingrese un valor cualquiera"));

    while(num >= 10){
        num = num/10;
        num_cifras ++;
    }
    alert("El numero de cifras es:  " + num_cifras);

    
}

function fechadenacimiento (){
    var a = 0;
    var b = 0;
    var c = 0;
    

    alert("Este es un algoritmo que determina el año de nacimiento ingresando su edad");

    a = parseInt(prompt("Por favor ingrese el año"));
    b = parseInt(prompt("Por favor ingrese su edad"));

    c = a - b
    alert("Usted nacio en el año:  " + c);
}

function banco (){
    var capi = 0;
    var ani = 0;
    var gan = 0;
    var anu = 0;
    var ganan = 0;
    var men = 0;

    alert("Este algoritmo mostrata el interes de un banco");

    capi = parseInt(prompt("Por favor ingrese el monto de su capital"));
    ani = parseInt(prompt("Por favor ingrese a los cuantos años o meses desea invertir en el banco"));

    gan = capi*0.02;
    anu = gan*12;
    ganan = (anu*ani)+capi;
    men = (gan*ani)+capi;

    alert("La ganacia de su capital mensual es:  " + gan);
    alert("La ganancia de su capital a los meses es de:  " + men);
    alert("La ganancia se su capital al año es: " + anu);
    alert("La ganancia de su capital al año o a los años es:  " + ganan);
}

function notas (){
    var a = 0;
    var nota1, nota2, nota3, nota4, nota5 = 0;
    var tot = 0;

    alert("Este es un algoritmo que calcula el promedio de 5 notas de un alumno");

    a = parseFloat(prompt("Por favor ingrese el nombre del alumno"));
    nota1 = parseInt(prompt("Por favor ingrese la nota"));
    nota2 = parseInt(prompt("Por favor ingrese la nota"));
    nota3 = parseInt(prompt("Por favor ingrese la nota"));
    nota4 = parseInt(prompt("Por favor ingrese la nota"));
    nota5 = parseInt(prompt("Por favor ingrese la nota"));

    tot = (nota1+nota2+nota3+nota4+nota5)/5;
    
    if (tot<2.9){
        alert("El alumno reprueba la materia con un porcentaje:  " + tot);
    }
    else if (tot>2.9){
        alert("El alumno aprueba la materia con un porcentaje: " + tot);
    }
}

function fruteria (){
    var k = 0;
    var pre = 0;
    var to = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    var f = 0;
    
    

    alert("Este es un algoritmo que permite a la fruteria saber el descuendo del kilo de manzana");

    k = parseInt(prompt("Por favor ingrese los kilos de manzana que compro el cliente"));
    pre = parseInt(prompt("Por favor ingrese el precio del kilo de manzana"));

    to = pre * k;
    a = to*0.10;
    b = to*0.15;
    c = to*0.20;
    d = to-a;
    e = to-b;
    f = to-c;

    if (k <= 2) {
        alert("No tiene descuento");
        
    }else if ((k >= 3) && (k <= 5)){ 
        alert("Tiene un descuento del 10%: " + a);
        alert("Total ha pagar:  " + d );
        
    }else if ((k>=6) && (k<=10)) {
        alert("Tiene un descuento del 15%; " + b);
        alert("Total ha pagar:  " + e );
        
    }else if (k>10) {
        alert("Tiene un descuento del 20%: " + c);
        alert("Total ha pagar:  " + f );
    }


   
}
    

  
