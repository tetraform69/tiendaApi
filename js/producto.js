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
                    <input type="number">
                    <button onclick="">Agregar al carrito</button>
                </div>
            </div>
        </div>`

            document.getElementById("detalle-producto").innerHTML = html
        })
}

