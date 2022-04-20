// declare the map
const map = L.map('the_map').setView([34.0709,-118.444], 5);



L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

addMarker(48.6960847,-113.8070624,'Glacier National Park','Visited here in 2016!')
addMarker(25.2866,-80.8987,'Everglades National Park','Visited here in 2021!')
addMarker(38.4755,-78.4535,'Shenandoah National Park','Visited here in 2017!')
addMarker (38.7331, -109.5925,'Arches National Park','Visited here in 2017!')
addMarker(40.4977, -121.4207,'Lassen Volcanic National Park','Visited here in 2018!')


// adding a function to add the markers
function addMarker(lat,lng,title,msg){
    console.log(msg)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h1> <p>${msg}</p>`)
    createButtons(lat,lng,title);
    return msg
}
// This function will create the buttons
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); 
    newButton.id = "button"+title; 
    newButton.innerHTML = title; 
    newButton.setAttribute("lat",lat); 
    newButton.setAttribute("lng",lng); 
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng]); 
    })
    document.getElementById("contents").appendChild(newButton);
    ; 
}
