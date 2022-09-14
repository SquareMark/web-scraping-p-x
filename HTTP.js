# Request // Ejemplo de una peticion HTTP
GET / HTTP/1.1
Host: developer.mozilla.org  Accept-Language: fr

# Response // Ejemplo de la respuesta HTTP
HTTP/1.1 200 OK // Estado de la respuesta(en este caso 200 = resuelta correcta)
Date: Sat, 09 Oct 2010 14:28:02 GMT //Fecha de la resolucion
Server: Apache //servidor del que se envia
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT  //ultima mod de este tipo de respuesta
ETag: "51142bc1-7449-479b075b2891b" //Coming us
Accept-Ranges: bytes  //tipo de datos
Content-Length: 29769  //cantidad de datos
Content-Type: text/html //tipo de contenido que llego
// De aqui para abajo se encuentra el cuerpo de la respuesta
<!DOCTYPE html... (here comes the 29769 bytes of the  requested web page)
