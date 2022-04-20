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
// declare the map
// const map = L.map('the_map').setView([34.0709,-118.444], 5);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// addMarker(38.538332883853286,-121.76126189163067,'UC Davis','Undergraduate degree!')
// addMarker(47.610401,-122.319366,'Seattle University','This is where I got my MA degree!')
// addMarker(47.655334,-122.303520,'University of Washington','This is where I used to work')
// addMarker (47.54807274571491, -122.35248018878177,'South Seattle College','This is also where I used to work')
// addMarker(34.069107615577934, -118.44481632246173,'UCLA','This is  where I go to school')


// // create a function to add markers
// function addMarker(lat,lng,title,message){
//     console.log(message)
//     L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
//     createButtons(lat,lng,title);
//     return message
// }

// function createButtons(lat,lng,title){
//     const newButton = document.createElement("button"); // adds a new button
//     newButton.id = "button"+title; // gives the button a unique id
//     newButton.innerHTML = title; // gives the button a title
//     newButton.setAttribute("lat",lat); // sets the latitude 
//     newButton.setAttribute("lng",lng); // sets the longitude 
//     newButton.addEventListener('click', function(){
//         map.flyTo([lat,lng]); //this is the flyTo from Leaflet
//     })
//     document.getElementById("contents").appendChild(newButton); //this adds the button to our page.
// }
