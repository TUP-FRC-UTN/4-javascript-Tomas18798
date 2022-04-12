var txtCorreo = document.getElementById('correo');
var txtPass = document.getElementById('contraseña');
var txtDireccion = document.getElementById('direccion');
var txtCiudad = document.getElementById('ciudad');
var txtPais = document.getElementById('pais');
var txtCP = document.getElementById('cp');
var check = document.getElementById('check');

function verificar(){
    
    if(txtCorreo.value === ''){
        alert('El campo Correo Electronico es requerido');
        return false;
    }else{
        let exp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i ;
        if(exp.test(txtCorreo.value) == false){
            alert("Verifique el formato del correo electronico (nombre@direccion.xxx)")
            return false;
        }
    }

    if(txtPass.value === ''){
        alert('El campo Contraseña es requerido');
        return false;
    }else{
        let exp = /^[A-Za-z0-9!?-]{5,10}$/ ;
        if(exp.test(txtPass.value) == false){
            alert("Verifique el formato de la contraseña (letras y numeros de 8 digitos)")
            return false;
        }
    }

    if(txtDireccion.value === ''){
        alert('El campo Direccion es requerido');
        return false;
    }else{
        let exp = /^[a-zA-Z0-9\s]{5,100}$/;
        //let exp =  /^[a-zA-Z0-9]{5,100}$/ ;
        if(exp.test(txtDireccion.value) == false){
            alert("Verifique el formato de la Direccion")
            return false;
        }
    }

    if(txtCiudad.value === ''){
        alert('El campo Ciudad es requerido');
        return false;
    }else{
        let exp =  /^[a-zA-Z\s]{5,25}$/ ;
        if(exp.test(txtCiudad.value) == false){
            alert("Verifique el formato de la Ciudad")
            return false;
        }
    }

    if(txtPais.value === ''){
        alert('El campo Pais es requerido');
        return false;
    }else{
        let exp =  /^[a-zA-Z\s]{5,25}$/ ;
        if(exp.test(txtPais.value) == false){
            alert("Verifique el formato del Pais")
            return false;
        }

    if(txtCP.value === ''){
        alert('El campo Codigo Postal es requerido');
        return false;
    }else{
        let exp =  /^[0-9]+$/ ;
        if(exp.test(txtCP.value) == false){
            alert("Verifique el formato del codigo postal")
            return false;
        }
    }

    if(check.checked == false){
        alert('debe aceptar los terminos');
        return false;
    }
    return true;
}

}

function validar(){
    if(verificar() == true){
        alert("Datos enviados correctamente")
    }else{alert("error")}
}
