
//create mapa

const map = L.map('mapid').setView([-23.5046404,-46.8785663], 16);

//create adn add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

//create  icon
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-ophanage"> <img src="./public/images/arrow-white.svg"></a>')

//create and add Marker
L.marker([-23.5046404,-46.8785663], {icon}).addTo(map)
    .bindPopup(popup)
    