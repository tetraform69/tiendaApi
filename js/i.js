
getCategorias()
getProductos()

function getCategorias() {
    let url = 'https://api.escuelajs.co/api/v1/categories'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            html = ""
            console.log(data)
            data.forEach((categoria, index) => {
                html += `<div class="categoria">
                    <img src="${categoria.image}" alt="categoria">
                    <div class="name_categoria">
                    <p>${categoria.name}</p>
                    </div>
                    </div>`

            })
            document.getElementById("categorias").innerHTML = html
        })
}

function getProductos() {
    let url = 'https://api.escuelajs.co/api/v1/products'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            html = ""
            data.forEach(product => {
                html += `<div class="producto">
                <img src="${product.images[0]}" alt="producto">
                <p>${product.title}</p>
                <p>${product.category.name}</p>
                <p>$${product.price}</p>
            </div>`
            });
            document.getElementById("productos").innerHTML += html
        })
}
