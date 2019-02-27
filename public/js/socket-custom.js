var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Cristian',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server', resp);
});

//Escuchar del servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});