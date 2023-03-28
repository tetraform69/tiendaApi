displayCarrito()

function displayCarrito() {
    let productos = localStorage.getItem('productos')
    productos = JSON.parse(productos)

    console.log(productos)
    productos.forEach(p => {
        addProducto(p)
    });
}

function addProducto(p) {
    let url = `https://api.escuelajs.co/api/v1/products/${p.id}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            html = `
            <tr>
            <td><p>${data.id}</p></td>
            <td><img src="${data.images[0]}" alt="producto"></td>
            <td><p>${data.title}</p></td>
            <td><p>${data.description}</p></td>
            <td><p>${p.cantidad}</p></td>
            <td><p class="price">${data.price}.00</p></td>
            </tr>`

            document.getElementById("carrito").innerHTML += html
        })
}

function Moneda(moneda) {
    var monedaActual = document.getElementById("moneda").value
    
    var myHeaders = new Headers();
    myHeaders.append("apikey", "2TBBT8nmmb3AC0a5Xz8l2XxKKYGTarNt");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    var precios = document.getElementsByClassName("price")
    
    document.getElementById("moneda").value = moneda

    console.log(precios)
    Array.from(precios).forEach(p => {
        console.log(p.innerText);
        fetch(`https://api.apilayer.com/fixer/convert?to=${moneda}&from=${monedaActual}&amount=${p.innerText}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                newPrecio = parseInt(result.result)
                p.innerText = newPrecio.toFixed(2)
            })
            .catch(error => console.log('error', error));
    })

}