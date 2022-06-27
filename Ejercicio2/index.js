const   
    a = document.getElementById('numeroUno'),
    b = document.getElementById('numeroDos'),
    c = document.getElementById('numeroTres'),
    d = document.getElementById('numeroCuatro'),
    boton = document.getElementById('boton'),
    parrafoMayor = document.getElementById('resultadoMayor'),
    parrafoMenor = document.getElementById('resultadoMenor')

    boton.addEventListener('click', () => {
        if((a.value == "") || (b.value == "") || (c.value == "") || (d.value == "")){
            window.alert("Los campos no pueden estar vacíos");
        }
        else if((a.value == b.value) || (a.value == c.value) || (a.value == d.value)){
            window.alert("Debe ingresar valores diferentes");
        }
        else if((b.value == c.value) || (b.value == d.value)){
            window.alert("Debe ingresar valores diferentes");
        }
        else if((c.value == d.value)){
            window.alert("Debe ingresar valores diferentes");
        }
        else { 
            let valorMayor = Math.max(a.value, b.value, c.value, d.value)
            if(valorMayor == a.value)  {
                parrafoMayor.innerHTML = 'El número mayor es: '+ valorMayor
            }else if(valorMayor == b.value) {
                parrafoMayor.innerHTML = 'El número mayor es: '+ valorMayor
            }else if(valorMayor == c.value) {
                parrafoMayor.innerHTML = 'El número mayor es: '+ valorMayor
            }else if(valorMayor == d.value) {
                parrafoMayor.innerHTML = 'El número mayor es: '+ valorMayor
            }

            let valorMenor = Math.min(a.value,b.value,c.value,d.value)
            if(valorMenor == a.value)  {
                parrafoMenor.innerHTML = 'El número menor es: '+ valorMenor
            }else if(valorMenor == b.value) {
                parrafoMenor.innerHTML = 'El número menor es: '+ valorMenor
            }else if(valorMenor == c.value) {
                parrafoMenor.innerHTML = 'El número menor es: '+ valorMenor
            }else if(valorMenor == d.value) {
                parrafoMenor.innerHTML = 'El número menor es: '+ valorMenor
            }
        }
    })
