function intervalo(){
    var inicio = document.getElementById("numero1").value
    var fim = document.getElementById("numero2").value

    document.write("Sequência : <br>")

    for(var i = inicio; i <= fim; i++){

        document.write(i + " ") 

    }     

    document.write("<br>" + "Numeros ímpares : <br>")

    for(var i = inicio; i <= fim; i++){
        if ( (i%2 ) == 0)
        document.write(i  + " ")
    }    
}
