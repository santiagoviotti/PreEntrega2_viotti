const almacen = [];


function agregarProducto() {
    let nombreProducto = prompt("Ingrese el nombre del producto:")
    let precio = prompt("Ingrese el precio del producto:")
    let stock = prompt("Ingrese el stock del producto:")

    let nuevoProducto = {
        nombre: nombreProducto.toUpperCase(),
        importe: parseFloat(precio),
        stock: parseInt(stock)
    }
    alert("Producto agregado exitosamente");
    almacen.push(nuevoProducto)
    console.clear()
    console.table(almacen.sort((a, b) => a.nombre.localeCompare(b.nombre)));


    let respuesta = confirm("Deseas agregar otro producto?")
    if (respuesta == true) {
        agregarProducto();
    }
}

function buscarProducto(nombre) {
    let productoSeleccionado = almacen.find((producto) => producto.nombre === nombre.toUpperCase());

    if (productoSeleccionado === undefined) {
        alert("El producto no se encuentra en stock");
        let respuesta = confirm("Deseas realizar otra búsqueda?");
        if (respuesta) {
            let nuevoNombre = prompt("Ingrese el nombre del producto:");
            buscarProducto(nuevoNombre);
        } else {
            alert("Búsqueda finalizada.");
        }
    } else {
        return productoSeleccionado;
    }
}

