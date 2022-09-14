$x('/') // ruta principal

$x('//h1/a/text()').map(x => x.wholeText)//seleciona a texto, el .map convierte a text en el chrome

//Usando Expresiones
$x('//div/span[@class="text"]/text()') //usando expresion osea [corchetes] selecciona todos los de tipo class text
$x('//span[@class!="text"]')

//Usando operadores
$x('//div/div[position()>5]')// trae los que esten en una posion por encima de

$x('//span[@class="text" or @class="tag-item"]')// trae los de una clase o otra

$x('//span[not(@class)]') // trae los que no tengan clase

//Usando Wildcards

$x('/') // Trae todo el documento porque representa la raíz de nuestro el html
$x('/*') // * después de / pide que traiga todos los nodos que están debajo de / (* es el primer wildcard)
$x('/html/*') // Trae todos los nodos que están inmediatamente después de html
$x('//*') <- // es la expresión para saltar todos los niveles y con el * en todas las direcciones. Trae todos los nodos y todos los atributos de estos nodos.
$x('//span[@class="text]/@*') //Trae todos los span, que tengan como clase “text”, con @* trae todos los atributos. Dicho de otra forma, trae todos los atributos de todos los nodos de tipo span de clase “text”.
$x('/html/body//div/@*') //Todos los atributos (usando @*) de todos los div (usando //div) que están después de body
$x('//span[@class="text" and @itemprop="text"]/node()')//Trae todos los spam que sean de clase “text” que tengan un atributo @itemprop “text” y de ahí (usando node()) traer todo lo que esté dentro de los spam que cumplen las condiciones

// node() a diferencia de * trae no solamente los nodos, sino también todo el contenido

//Usando In text Search

$x('//small[@class="author" and starts-with(., "A")]/text()')// usando starts-with le indico con que letra inicia la busqueda
$x('//small[@class="author" and contains(., "g")]/text()') // usando contains se le indica la(s) letra(s) que debe contener para hacer la busqueda
$x('//small[@class="author" and starts-with(., "A") and contains(., "Ei")]/text()') //Logicamente Tambien se puede concatenar

//Notas extras sobre In text Search

start-with(.“Texto a buscar”) // Empezar con, el punto hace referencia al nodo actual.

contains (., “Texto a buscar”) //  Sirve para llamar por el texto contenido en.


// Nota: Debido a las versiones del lenguaje Xpath en los navegadores
// las funciones end-with y matches no están disponibles, pero una ve en código python corren sin problemas.

end-with(.,"")// Termina en.
matches(.,"")// Sirve para hacer una búsqueda en el texto de un nodo que coincida con una expresión regular.
