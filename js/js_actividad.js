function validarInfo(){
    var expReg = {
        //correo:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        contraseña:/^[a-zA-Z0-9]{5,10}$/,
        direccion:/^[a-zA-Z0-9]{6,30}$/,
        ciudad:/^[a-zA-Z]{3,20}$/,
        pais:/^[a-zA-Z]{3,20}$/,
        cp:/^[0-9]{2,10}$/
    } 
    var txtCorreo = document.getElementById('correo');
    var txtPass = document.getElementById('contraseña');
    var txtDireccion = document.getElementById('direccion');
    var txtCiudad = document.getElementById('ciudad');
    var txtPais = document.getElementById('pais');
    var txtCP = document.getElementById('cp');
    var check = document.getElementById('check');

    if(txtCorreo.value === ''){
        alert('El campo Correo Electronico es requerido');
        return false;
    }else if(expReg.correo.test(txtCorreo) == false){
        alert('Verifique el formato del correo electronico')
        return false;
    }

    if(txtPass.value === ''){
        alert('El campo Contraseña es requerido');
        return false;
    }else if(expReg.contraseña.test(txtPass)==false){
        alert('Verifique el formato de la contraseña')
        return false;
    }

    if(txtDireccion.value === ''){
        alert('El campo Direccion es requerido');
        return false;
    }else if(expReg.direccion.test(txtDireccion)==false){
        alert('Verifique el formato de la direccion')
        return false;
    }

    if(txtCiudad.value === ''){
        alert('El campo Ciudad es requerido');
        return false;
    }else if(expReg.ciudad.test(txtCiudad)==false){
        alert('Verifique el formato de la ciudad')
        return false;
    }

    if(txtPais.value === ''){
        alert('El campo Pais es requerido');
        return false;
    }else if(expReg.pais.test(txtPais)==false){
        alert('Verifique el formato dl pais')
        return false;
    }

    if(txtCP.value === ''){
        alert('El campo Codigo Postal es requerido');
        return false;
    }else if(expReg.cp.test(txtCP)==false){
        alert('Verifique el formato del codigo postal')
        return false;
    }

    if(check.checked == false){
        alert('debe aceptar los temrinos');
        return false;
    }
    return true;
}

function validar(){
    if(validarInfo() == true){
        alert('Datos enviados correctamente!!');
    }else{
        alert('Error de validacion');
    }
}

