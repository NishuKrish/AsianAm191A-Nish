
// JavaScript const variable declaration
const map = L.map('the_map').setView([34.0709, -118.444], 3); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 
// adding images
let img1 = '<center><img src="https://raw.githubusercontent.com/NishuKrish/AsianAm191A-Nish/main/chicago%20pic.JPG" height="150px" width="150px"/></center>';
let img2 = '<center><img src="https://raw.githubusercontent.com/NishuKrish/AsianAm191A-Nish/main/sedona.JPG" height="150px" width="150px"/></center>';
let img3 = '<center><img src="https://raw.githubusercontent.com/NishuKrish/AsianAm191A-Nish/main/charlotte.JPG" height="150px" width="150px"/></center>';
let img4 = '<center><img src="https://raw.githubusercontent.com/NishuKrish/AsianAm191A-Nish/main/congaree.JPG" width="150px"/></center>';
function add_marker(lat,long,msg, img ){
    L.circleMarker([lat, long]).addTo(map)
    .bindPopup(msg + img)
}


add_marker(41.881832, -87.623177, "<h1>Chicago</h1><p>In July 2021, I visited the Windy City with my family. Here is a picture of me with the Willis Tower!!</p>", img1)
add_marker(34.871002, -111.760826, "<h1>Sedona</h1><p>Over Memorial Day Weekend, I went on a road trip with friends to Sedona!</p>", img2)
add_marker(35.227085,-80.843124, "<h1>Charlotte</h1><p>Over winter break, I visited my cousins in Charlotte, North Carolina!</p>", img3)
add_marker(33.7919,-80.7490, "<h1>Congaree National Park</h1><p>Over winter break, I also visited Congaree National Park in South Carolina. It was a very unique place! </p>", img4)