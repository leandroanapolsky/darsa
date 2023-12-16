function validarFormulario() {
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Verificar que los campos requeridos estén completos
    if (nombre === '' || email === '' || phone === '') {
        alert('Por favor, complete todos los campos obligatorios.');
        return false;
    }

    // Puedes agregar más validaciones según tus necesidades

    return true; // Permitir el envío del formulario
}