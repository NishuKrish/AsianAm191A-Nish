// declare variables
let mapOptions = {'center': [34.0709,-96.6989],'zoom':6}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(data){
    // console.log(data)
    // these are the names of our lat/long fields in the google sheets:
    L.circle([data.lat,data.lng], 5000).addTo(map).bindPopup(`<h2>${data['Name']}</h2> <h3>${data['Like']}</h3> <h3>${data['Location']}</h3>`)
    createButtons(data.lat,data.lng,data['Name'])
    return
}
// create a function to add the buttons
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); //this is the flyTo from Leaflet
    })
    const spaceForButtons = document.getElementById('placeForButtons')
    spaceForButtons.appendChild(newButton);//this adds the button to our page.
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQNveTEgSo8JDBmiso8aW97wE7EKiPkERUJEbLymC5h8lfZ3L7j4rF-rT0rzENvU-rQLQZyGCUxmJoY/pub?output=csv"

function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => processData(results)
    })
}

function processData(results){
    console.log(results)
    results.data.forEach(data => {
        console.log(data)
        addMarker(data)
    })
}
loadData(dataUrl)
