displayCarrito()

function displayCarrito(){
    let productos = localStorage.getItem('productos')
    productos = JSON.parse(productos)

    console.log(productos)
    productos.forEach(p => {
        addProducto(p)
    });
}

function addProducto(p){
    let url = `https://api.escuelajs.co/api/v1/products/${p.id}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            html = `
            <tr>
            <td><p>${data.id}</p></td>
            <td><img src="${data.images[0]}" alt="producto"></td>
            <td><p>${data.title}</p></td>
            <td><p>${data.description}</p></td>
            <td><p>${p.cantidad}</p></td>
            <td><p>$${data.price}</p></td>
            </tr>`

            document.getElementById("carrito").innerHTML += html
        })
}