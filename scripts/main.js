const Comidas = [
    {
        title: "Milanesa",
        price: 25,
        stock: true,
        img: 'https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/PEX3SUWOHRFAVOTBFRTM2VQSO4.jpg', 
        info: `Rica milanesa hecha a base de pan molido carne machucada
        acompañada de arroz graneado y su ensalada`
    },
    {
        title: "Silpancho",
        price: 20,
        stock: true, 
        img: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Silpancho_cochalo.jpg',
        info: `Rica milanesa hecha a base de pan molido carne machucada
        acompañada de arroz graneado y su ensalada`
    },
    {
        title: "Pique Macho",
        price: 40,
        stock: false, 
        img: 'https://i0.wp.com/elcalderoviajero.com/wp-content/uploads/2018/12/pique-a-lo-macho-12.jpg?fit=750%2C498&ssl=1',
        info: `Rica milanesa hecha a base de pan molido carne machucada
        acompañada de arroz graneado y su ensalada`
    },
    {
        title: "Chiharron",
        price: 50,
        stock: true, 
        img: 'https://saboresbolivianos.com/wp-content/uploads/chicharron-de-chancho-1-720x470.jpg', 
        info: `Rica milanesa hecha a base de pan molido carne machucada
        acompañada de arroz graneado y su ensalada`
    },
    {
        title: "Fricase",
        price: 30,
        stock: true, 
        img: 'https://vivecandelaria.com/wp-content/uploads/2019/03/fricase.jpg',
        info: `Rica milanesa hecha a base de pan molido carne machucada
        acompañada de arroz graneado y su ensalada`
    },
    {
        title: "Milanesa",
        price: 34.3,
        stock: true, 
        img: 'https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/PEX3SUWOHRFAVOTBFRTM2VQSO4.jpg',
        info: `Rica milanesa hecha a base de pan molido carne machucada
        acompañada de arroz graneado y su ensalada`
    }
] 

const newEat = {
        title: "Milanesa",
        price: 25,
        stock: true,
        img: 'https://cloudfront-us-east-1.images.arcpublishing.com/radiomitre/PEX3SUWOHRFAVOTBFRTM2VQSO4.jpg', 
        info: `Rica milanesa hecha a base de pan molido carne machucada
        acompañada de arroz graneado y su ensalada`
    }
Comidas.push(newEat)

const map = document.getElementById("menu")


const newMap = Comidas.map(item => {
    return `<article class="cards">
        <img src="${item.img}"/>
        <h3>${item.title}</h3>
        <p>${item.info}</p>
        <span>${item.price} Bs.</span>
    </article>`
})

map.innerHTML = newMap


var form = document.getElementById('submit')
form.addEventListener('submit', function(e){
    e.preventDefault()
    var nombre = document.getElementById('nombre')
    console.log(nombre.value);
})