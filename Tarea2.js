var num1;
var num2;
var signo;
var existe = false;
var count = allStorage().length;

document.getElementById("show").innerHTML= allStorage();

function add(num1)
{
    var x = document.getElementById("result").innerText;
    if(x == "0" || existe)
    {
        document.getElementById("result").innerHTML= num1; 
        existe = false;
    }
    else
    {
        document.getElementById("result").innerHTML = x + num1;
    }

}

function calc(x)
{
    switch (x) {
        case 'ac':document.getElementById("result").innerHTML = 0; num1 = 0; num2 = 0;  
        break;

        case '*': num1 = document.getElementById("result").innerText; document.getElementById("result").innerHTML = ''; signo ='*';
        break;
        
        case '=' : num2 = document.getElementById("result").innerText; resultado(signo); existe = true;
        break;

        case '+': num1 = document.getElementById("result").innerText; document.getElementById("result").innerHTML = ''; signo ='+';
        break;
        
        case '-': num1 = document.getElementById("result").innerText; document.getElementById("result").innerHTML = ''; signo ='-';
        break;

        case '/': num1 = document.getElementById("result").innerText; document.getElementById("result").innerHTML = ''; signo ='/';
        break;

        default:
        break;
    }
}

function resultado(signo)
{
    if (signo == '*') {
        document.getElementById("result").innerHTML = num1 * num2;
        localStorage.setItem((count ++) + '', num1 + signo + num2 + ' = ' + (num1 * num2));
        document.getElementById("show").innerHTML= allStorage();
    }

    if (signo == '-') {
        document.getElementById("result").innerHTML = num1 - num2;
        localStorage.setItem((count ++) + '', num1 + signo + num2 + ' = ' + (num1 - num2));
        document.getElementById("show").innerHTML= allStorage();
    }

    if (signo == '+') {
        document.getElementById("result").innerHTML = parseFloat(num1)+ parseFloat(num2);
        localStorage.setItem((count ++) + '', num1 + signo + num2 + ' = ' + (parseFloat(num1)+ parseFloat(num2)));
        document.getElementById("show").innerHTML= allStorage();
    }

    if (signo == '/') {
        document.getElementById("result").innerHTML = num1 / num2;
        localStorage.setItem((count ++) + '', num1 + signo + num2 + ' = ' + (num1 / num2));
        document.getElementById("show").innerHTML= allStorage();
    }
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

function clean()
{
    localStorage.clear();
    document.getElementById("show").innerHTML= allStorage();
    document.getElementById("show").innerHTML = 0;
}

