const   
    a = document.getElementById('numeroUno'),
    b = document.getElementById('numeroDos'),
    c = document.getElementById('numeroTres'),
    d = document.getElementById('numeroCuatro'),
    boton = document.getElementById('boton'),
    parrafoMayor = document.getElementById('resultadoMayor'),
    parrafoMenor = document.getElementById('resultadoMenor');

    boton.addEventListener('click', () => {
        
        if(a.value == "" || b.value == "" || c.value == "" || d.value == ""){
            alert("Los campos no pueden estar vacíos");
        }
        else if(a.value == b.value || a.value == c.value || a.value == d.value || b.value == c.value || b.value == d.value || c.value == d.value){
            alert("Debe ingresar valores diferentes");
        }
        
        else if(a.value < 1 || b.value < 1 || c.value < 1 || d.value < 1){
            alert("Debe ingresar números mayores a 0");
        }else { 
            let valorMayor = Math.max(a.value, b.value, c.value, d.value);
            let valorMenor = Math.min(a.value,b.value,c.value,d.value);

            parrafoMayor.innerHTML = 'El número mayor es: '+ valorMayor;
            parrafoMenor.innerHTML = 'El número menor es: '+ valorMenor;
        }
    });
