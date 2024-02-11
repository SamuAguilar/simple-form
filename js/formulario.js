(function() {
    const formulario = document.getElementById('formulario'),
        nombre = formulario.nombre,
        correo = formulario.correo,
        sexo = formulario.sexo,
        terminos = formulario.terminos,
        error = document.getElementById('error');

    function validarNombre(e){
        if(nombre.value == "" || nombre.value == null) {
            console.log('por favor completa el nombre');
            error.style.display = 'block'
            error.innerHTML += '<li>Por favor completa el nombre</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }   

    function validarCorreo(e){
        if(correo.value == "" || correo.value == null) {
            console.log('por favor complete el correo');
            error.style.display = 'block'
            error.innerHTML += '<li>Por favor completa el email</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }   

    function validarSexo(e){
        if(sexo.value == '' || sexo.value == null){
            console.log('por favor complete el sexo');
            error.style.display = 'block'
            error.innerHTML += '<li>Por favor completa el sexo</li>'
            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
    }

    function validarTerminos(e){
        if(terminos.checked == false){
            console.log('por favor acepte los términos y condiciones');
            error.style.display = 'block'
            error.innerHTML += '<li>Por favor acepta los términos y condiciones</li>'
            e.preventDefault();
        }else {
            error.style.display = 'none';
        }
    }
 

    function validarFormulario(e) {
        error.innerHTML = '';
        validarNombre(e);
        validarCorreo(e);
        validarSexo(e);  
        validarTerminos(e);
    }

    formulario.addEventListener('submit', validarFormulario)


}())