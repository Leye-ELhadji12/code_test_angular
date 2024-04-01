import { openstreetmapGetPOIs } from 'https://tbo47.github.io/ez-opendata.js';

const myDiv = document.getElementById('my-div');

// Fonction pour afficher les points d'intérêt
async function showPois(position) {
    const { latitude, longitude } = position.coords;
    const bbox = `${latitude - 0.1},${longitude - 0.1},${latitude + 0.1},${longitude + 0.1}`;
    const food = await openstreetmapGetPOIs(bbox, [
        ["amenity", "bar"],
        ["amenity", "biergarten"],
        ["amenity", "cafe"],
        ["amenity", "restaurant"],
        ["amenity", "fast_food"],
        ["amenity", "food_court"],
        ["amenity", "ice_cream"],
    ]);

    food.forEach(poi => {
        myDiv.innerHTML += `<a href="${poi.osm_url}" target="_blank">${poi.name}</a>`;
    });
}
// Demande de la position et affichage des points d'intérêt
navigator.geolocation.getCurrentPosition(showPois);
