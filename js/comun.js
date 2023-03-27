
getCategorias()

function getCategorias() {
    let url = 'https://api.escuelajs.co/api/v1/categories'

    fetch(url)
        .then(response => response.json())
        .then(data => {
            html = ""
            console.log(data)
            data.forEach((categoria, index) => {
                html += `<a href="#productos" class="categoria" onclick="filtrarCategoria('${categoria.id}')">
                    <img src="${categoria.image}" alt="categoria">
                    <div class="name_categoria">
                    <p>${categoria.name}</p>
                    </div>
                    </a>`

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
            console.log(data)
            data.forEach(product => {
                html += `
                <a href="producto.html" onclick="productoId('${product.id}')" class="producto">
                <img src="${product.images[0]}" alt="producto">
                <p>${product.title}</p>
                <p>${product.category.name}</p>
                <p>$${product.price}</p>
                </a>`
            });
            document.getElementById("productos").innerHTML = html
        })
}

function displayCategoria() {

    dcategoria = document.getElementById('categorias')

    if (dcategoria.className == 'categorias hide') {
        dcategoria.classList.remove('hide')
    } else {
        dcategoria.classList.add('hide')
    }
}

function filtrarProducto(producto) {
    let busqueda = document.getElementById('search').value
    let name = producto.title.toLowerCase()
    return name.includes(busqueda.toLowerCase())
}

function autoComplete() {
    let url = 'https://api.escuelajs.co/api/v1/products'
    let buscar = document.getElementById('search').value

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (buscar.length >= 2) {
                document.getElementById("list-productos").classList.remove('hide')
                html = ""
                filtro = data.filter(filtrarProducto)
                filtro.forEach(product => {
                    html += `
                    <a href="producto.html" onclick="productoId('${product.id}')" class="producto-item">
                    <img src="${product.images[0]}" alt="producto">
                    <p>${product.title}</p>
                    </a>`
                });
                document.getElementById("list-productos").innerHTML = html
            } else {
                document.getElementById("list-productos").classList.add('hide')
            }
        })
}

function filtrarCategoria(categoriaId){
    let url = `https://api.escuelajs.co/api/v1/products/?categoryId=${categoriaId}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            html = ""
            console.log(data)
            data.forEach(product => {
                html += `<a href="producto.html" onclick="productoId('${product.id}')" class="producto">
                <img src="${product.images[0]}" alt="producto">
                <p>${product.title}</p>
                <p>${product.category.name}</p>
                <p>$${product.price}</p>
                </a>`
            });
            document.getElementById("productos").innerHTML = html
        })
}

function productoId(idProducto){
    localStorage.setItem("idProducto", idProducto)
}

window.addEventListener('click', (event) => {
    if (event.target.id != 'btnCategorias') {
        document.getElementById("categorias").classList.add('hide')
    }
    if (event.target.id != 'search') {
        document.getElementById("list-productos").classList.add('hide')
    }
})