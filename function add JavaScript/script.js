function add(a, b){
    var c = a + b;
    if(c > 10 && c < 20){
        var noticia = "Your math account is greater than 10 and less than 20";
    }  
    else if(c < 10){
        var noticia = "Your math account is less than 10";
    }
    else if(c > 20){
        var noticia = "Your math account is greater than 20";
    }
    else if(c == 10){
        var noticia = "Your math account is exactly 10";
    }
    else if(c == 20){
        var noticia = "Your math account is exactly 20";
    }
    var noticia = console.log(noticia + "\n The exact operation number is " + c);
    return noticia;
}

add(1, 12);