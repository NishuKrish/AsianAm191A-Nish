// declare variables
let mapOptions = {'center': [34.0709,-100.444],'zoom':4}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message, loc){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3> <h3>${loc}</h3> `)
    return message
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
        addMarker(data.lat,data.lng,data['Name'],data['Like'], data['Location'])
    })
}

loadData(dataUrl)