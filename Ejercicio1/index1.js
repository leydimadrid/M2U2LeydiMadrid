const nombreCompleto=document.getElementById("nombreCompleto")
nombreCompleto.addEventListener("blur",()=>{
    console.log(nombreCompleto.value)
}) 
const escogerMaterias=document.getElementById("escogerMaterias") 
const totalMaterias=document.getElementById("totalMaterias")
const descuento=document.getElementById("descuento")
const totalaPagar=document.getElementById("totalaPagar")

let nombreCompleto="nombre";