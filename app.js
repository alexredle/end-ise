var http = require('http');
var server = http.createServer();
 
function mensaje(petic, resp) {
	resp.writeHead(200, {'content-type': 'text/plain'});
	resp.write('Introducción a la Ingenieria de Software');
	resp.end();
}
server.on('request', mensaje);
 
server.listen(8080, function () {
  	console.log('La Aplicación está funcionando en el puerto 3000');
});