productoId = localStorage.getItem('idProducto')

getProducto()

function getProducto(){
    let url = `https://api.escuelajs.co/api/v1/products/${productoId}`

    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data)
            html = `<div class="product">
            <img src="${data.images[0]}" alt="producto">
            <div class="info-product">
                <h3>${data.title}</h3>
                <h4 onclick="filtrarCategoria('${data.category.id}')">${data.category.name}</h4>
                <p>${data.description}</p>
                <p>$${data.price}</p>
                <div class="carrito-product">
                    <input id="cantidad" type="number" value="1">
                    <button onclick="addCarrito('${data.id}')">Agregar al carrito</button>
                </div>
            </div>
        </div>`

            document.getElementById("detalle-producto").innerHTML = html
        })
}

function addCarrito(id){
    let cantidad = parseInt(document.getElementById('cantidad').value) 
    
    if (isNaN(cantidad) || cantidad <= 0){
        document.getElementById('cantidad').value = 1
        Swal.fire({
            icon: 'warning',
            title: 'cantidad',
            text: 'No puede dejar la cantidad vacia'
          })
    }else{
        p = {
            'id': id,
            'cantidad': cantidad
        }

        productos = localStorage.getItem('productos')
        productos = JSON.parse(productos)

        if (productos == null){
            productos = []
        }

        productos.push(p)
        localStorage.setItem('productos', JSON.stringify(productos))
        
        Swal.fire({
            icon: 'success',
            title: 'Agregado',
            text: 'Su producto fue agregado correctamente al carrito'
          })
    }
}
