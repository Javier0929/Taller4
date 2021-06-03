/*  1.Cree un script que solicite un valor numérico al usuario en base octal (8)
y posteriormente muestre su equivalente en base decimal (10).
Muestre el resultado en una ventana emergente.  */

function converd() {
    var num = document.getElementById("octal").value;
    var resul = parseInt(num, 8);
    var verme = window.open("", "", "width=550,height=300, ,left=500, top=110");
    verme.document.write('<p id="mensage">' + resul + "</p>");
  }
  
/* Cree un script que defina un objeto llamado Producto_alimenticio, 
este objeto debe presentar las propiedades código, nombre y precio,
 además del método imprimeDatos, el cual escribe por pantalla los valores de sus propiedades. 
 Posteriormente, cree tres instancias de este objeto y guárdelas en un array. 
 Con la ayuda del bucle for, utilice el método imprimeDatos para mostrar por pantalla 
 los valores de los tres objetos instanciados.*/

 
productos_lista = [];
function Producto_alimenticio() {
    function producto(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("nombre").value;
    var precio = document.getElementById("precio").value;
    nuevoProducto = new producto(codigo, nombre, precio);
    productos_lista.push(nuevoProducto);
}

function imprimeDatos() {
    limpiarPantalla();
    for (i = 0; i < productos_lista.length; i++) {
        document.getElementById("objetos").innerHTML += `<p>Codigo = ${productos_lista[i].codigo}<br>
        Nombre = ${productos_lista[i].nombre}<br>
        Precio = ${productos_lista[i].precio}<br></p>`
    }
}

function limpiarPantalla() {
    document.getElementById("objetos").innerHTML = "";
}