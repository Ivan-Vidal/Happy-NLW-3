 
 //create mapa
 
 const map = L.map('mapid').setView([-23.5046404,-46.8785663], 15);
 
 //create adn add tileLayer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
 
 //create  icon
 const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29,68],
})
let marker;

//create and add marker

map.on('click',(event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    
    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng
    
    
    // remove icon
    marker && map.removeLayer(marker)
    
    //add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
    
})


// adicionar o campo de fotos

function addPhotoField(){
    // pegar o container de fotos#images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    // clone da ultima imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
    
    //verificar se está vazio
    const input = newFieldContainer.children[0]
    if( input.value == ""){
        return
    }
    
    
    // limpar o campo antes de add no container
    //newFieldContainer.children[0].value=''
    input.value = ""
    
    // adicicionar ao container de images
    container.appendChild(newFieldContainer)
}


//Excluir campo
function deleteField(event){

    const span = event.currentTarget
    
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    if(fieldsContainer.length < 2){
        // limpar o valor
        span.parentNode.children[0].value = ""
        return
    }
    
    //deletar o campo
    span.parentNode.remove()
}


// select yes or no

function toggleSelect(event){
    // retirar a class active 
    document.querySelectorAll('.button-select button').forEach(button=>button.classList.remove("active"))
    // pegar o botao clicado

    const button = event.currentTarget
    button.classList.add('active')


    // verificar se sim ou nao
const input = document.querySelector('[name="open_on_weekends"]')
console.log(input)

    // colocar a class active 

    input.value = button.dataset.value
}

