const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}



//create mapa

const map = L.map('mapid', options).setView([-23.5046404,-46.8785663], 16);

//create adn add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create  icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})


//create and add Marker
L.marker([-23.5046404,-46.8785663], {icon}).addTo(map)
    
    

// Image Galery

selectImage = (event) =>{
    const button = event.currentTarget
//remover todas as classes active
const buttons = document.querySelectorAll(".images button")
buttons.forEach((button)=>{
    button.classList.remove("active")
})

// selecionar a imagem clicada
const image = button.children[0]
const imageContainer = document.querySelector(".orphanage-details > img")

// Atualizar o container de imagem
imageContainer.src = image.src

// adicionar a class .active
button.classList.add('active')

}
