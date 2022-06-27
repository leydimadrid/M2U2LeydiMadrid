const
    nombreCompleto = document.getElementById('nombreCompleto'),
    nombreMateria = document.getElementById('nombreMateria'),
    valorMateria = document.getElementById('valorMateria'),
    inscribir = document.getElementById('inscribir'),
    Materias = document.getElementById('Materias'),
    totalMaterias = document.getElementById('totalMaterias'),
    totalaPagar = document.getElementById('totalaPagar'),
    final = document.getElementById('final'),
    botonL = document.getElementById('botonL')

let baseDatos=[];
let clicks = 0;

inscribir.addEventListener('click', () => {
    if((nombreMateria.value == "") || (valorMateria.value == "")){
        alert("Completa los campos vacíos");
    }
    else{
        if(baseDatos.length  < 5){
            function Materia(materia,valor){
                this.materia=materia;
                this.valor=valor;
            }
            nuevaMateria = new Materia(nombreMateria.value,valorMateria.value);
            console.log(nuevaMateria);
            agregar();
            nombreMateria.value=""; valorMateria.value="";
        }
        
    }
})

function agregar(){
    baseDatos.push(nuevaMateria);
    document.getElementById("tabla").innerHTML += '<tbody><td>' + 
    nuevaMateria.materia + '</td><td>$ ' +nuevaMateria.valor + '</td></tbody>';
};

totalMaterias.addEventListener('click', () => {
    let costosFijos=28000;
        costoMatricula=[];
        sum=0;
        masCostoFijo=14;
        conDescuento=0;

    if(baseDatos == ""){
        alert("Registrar al menos una asignatura")
    }
    else{
        
        for (let j=0; j<baseDatos.length; j++) {
            costoMatricula.push(parseInt(baseDatos[j].costo))
        }

        for (let i = 0; i < costoMatricula.length; i++){ 
            sum += costoMatricula[i];
        }

        masCostoFijo = sum + costoMatricula;
        conDescuento = masCostoFijo * 0.8;
        baseDatos.length + "Materias";
        totalaPagar.innerHTML="El valor de su matricula es: $ " + sum;
        final.innerHTML="El valor total de las materias es: $ " 
        + '<br>' + "Con el descuento del 20% el total final de su matricula es: $ " + conDescuento + masCostoFijo;
    }
})

let click=0;

