let datos = {
    correo: false,
    contraseña: false,
    direccion: false,
    ciudad: false,
    pais: false,
    cp: false,
    check: false
}
let expReg = {
    correo:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    contraseña:/^[a-zA-Z0-9]{5,10}$/,
    direccion:/^[a-zA-Z0-9]{6,30}$/,
    ciudad:/^[a-zA-Z]{3,20}$/,
    pais:/^[a-zA-Z]{3,20}$/,
    cp:/^[0-9]{2,10}$/
} 
let form = document.getElementById("form")
let inputs = document.querySelectorAll("input")
var txtCorreo = document.getElementById('correo');
var txtPass = document.getElementById('contraseña');
var txtDireccion = document.getElementById('direccion');
var txtCiudad = document.getElementById('ciudad');
var txtPais = document.getElementById('pais');
var txtCP = document.getElementById('cp');
var check = document.getElementById('check');

let verificar = (e)=>{
    switch(e.target.name){
        case "correo":
            if(expReg.correo.test(e.target.value)){
                datos[correo] = true
            }else{datos[correo] = false}
            break;
        case "contraseña":
            if(expReg.contraseña.test(e.target.value)){
                datos[contraseña] = true
            }else{datos[contraseña] = false}
            break;
        case "direccion":
            if(expReg.direccion.test(e.target.value)){
                datos[direccion] = true
            }else{datos[direccion] = false}
            break;
        case "ciudad":
            if(expReg.ciudad.test(e.target.value)){
                datos[ciudad] = true
            }else{datos[ciudad] = false}
            break;
        case "pais":
            if(expReg.pais.test(e.target.value)){
                datos[pais] = true
            }else{datos[pais] = false}
            break;
        case "cp":
            if(expReg.cp.test(e.target.value)){
                datos[cp] = true
            }else{datos[cp] = false}
            break;
        case "check":
            if(e.target.value == true){
                datos[check] = true
            }else{datos[check] = false}
            break;
    }
}
inputs.forEach((item)=>{
    item.addEventListener("keyup",verificar)
})
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if(datos[correo]&&datos[contraseña]&&datos[direccion]&&datos[pais]&&datos[ciudad]&&datos[cp]&&datos[check]){
        alert("Datos enviados correctamente")
    }else if(datos[correo] == false){
        alert("correo")
    }else if(datos[contraseña] == false){
        alert("contraseña")
    }else if(datos[direccion] == false){
        alert("direccion")
    }else if(datos[pais] == false){
        alert("pais")
    }else if(datos[ciudad] == false){
        alert("ciudad")
    }else if(datos[cp] == false){
        alert("cp")
    }else if(datos[check] == false){
        alert("check")
    }else{alert("Error")}
})