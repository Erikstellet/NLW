// create map
const map = L.map('mapid').setView([-27.2236479,-49.6553103], 15);

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon(
{
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add markers
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker) 

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// photos upload
function addPhotoField()
{
    // get the photo container #images
    const container = document.querySelector('#images')
    // get container and duplicate .images-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // clone
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // check if it is empty
    const input = newFieldContainer.children[0]

    // if
    if(input.value == ""){
        return 
    }

    // clear container
    input.value = " "

    // add clone #images
    container.appendChild(newFieldContainer)
}

function deleteField(event)
{
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2)
    {
        // clear primary container
        span.parentNode.children[0].value = ""
        return 
    }

    // remove next container
    span.parentNode.remove();

}

//select yes or no 
function toggleSelect(event)
{
    // remove class .active (from buttons)
    document.querySelectorAll('.button-select button').forEach((button) => button.classList.remove('active'))

    // put on class .active
    const button = event.currentTarget
    button.classList.add('active')

    // get the button


    // check boolean valor


    // update input hidden of selected value
    const input = document.querySelector('[name="open_on_weekends"]')

    input.value = button.dataset.value
}




