import numero from './geradorCPF';

var numero = prompt();
var array = numero.split('');
var cont = 8;
var resultado = 0;
var multiplicador;
var dividido;
var resto;
var digito1 = new Boolean(false);
var digito2 = new Boolean(false);

function verifica1(array,cont,resultado,dividido,resto,multiplicador){
    multiplicador = 2;
    while(cont != -1){
        resultado =(array[cont]*multiplicador) + resultado;
        cont = cont -1;
    multiplicador = multiplicador +1;
    dividido = parseInt(resultado / 11);
    resto = resultado % 11;
}

    if(resto >= 2 && array[9] == 11 - resto){
        digito1 = true;
    }
    else if(resto < 2 && array[9] == 0){
        digito1 = true;
    }else  digito1 = false;
    
}    

function verifica2(array,cont,resultado,dividido,resto,multiplicador){
    multiplicador = 2;
    cont = cont +1;
while(cont != -1){
    resultado =(array[cont]*multiplicador) + resultado;
    cont = cont -1;
    multiplicador = multiplicador +1;
    dividido = parseInt(resultado / 11);
    resto = resultado % 11;
}

    if(resto >= 2 && array[10] == 11 - resto){
        digito2 = true;
    }
    else if(resto < 2 && array[10] == 0){
        digito2 = true;
        document.write("cpf valido: " + array.join(''));
    }else digito2 = false;
    
    if (digito1 == true && digito2 == true){
        document.write(" cpf valido: "+ array.join(''))
    }else document.write(" cpf invalido: "+ array.join(''));

    
}   
    
verifica1(array,cont,resultado,dividido,resto);
verifica2(array,cont,resultado,dividido,resto);

geradorCPF teste = new geradorCPF();


 /*   document.write(" "+resto+" ");
    document.write(" "+resultado+" ");
    document.write(" "+dividido+" ");
*/