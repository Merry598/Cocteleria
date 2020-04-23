var d = document

function crearSesion(evento) {
    evento.preventDefault()

    var user = d.querySelector('#user').value,
        pass = d.querySelector('#pass').value

    console.log(user, pass)

    if (user == 'merry' && pass == 'msaenzre') {
        sessionStorage.setItem('nombre', user)
        window.location.href = 'Compra.html'
    } else {
        alert('Datos incorrectos')
        evento.target.reset()
    }

}

function iniciarSesion() {
    var login = d.querySelector('#login')
    login.onsubmit = crearSesion
}

window.onload = iniciarSesion

function obtenerSesion() {
    var nombre = sessionStorage.getItem('nombre')
    d.querySelector('#autenticado').innerHTML = nombre

    return (nombre === null || nombre === undefined) ? window.location.href = 'login.html' : false
}

d.querySelector('#logout').onclick = function() {
    sessionStorage.clear()
    window.location.href = 'login.html'
}

window.onload = obtenerSesion