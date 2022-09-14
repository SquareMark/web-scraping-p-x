$x('/') // ruta principal

$x('//h1/a/text()').map(x => x.wholeText)//seleciona a texto, el .map convierte a text en el chrome

//Usando Expresiones
$x('//div/span[@class="text"]/text()') //usando expresion osea [corchetes] selecciona todos los de tipo class text
$x('//span[@class!="text"]')

    //Usando operadores
$x('//div/div[position()>5]')// trae los que esten en una posion por encima de

$x('//span[@class="text" or @class="tag-item"]')// trae los de una clase o otra

$x('//span[not(@class)]') // trae los que no tengan clase
