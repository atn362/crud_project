const html = (strings, ...values) => new DOMParser().parseFromString(strings.map((string, i) => strings[i] + values[i]).join(''), "text/html").body.firstChild;

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";

for (var i = 0; i < 25; i++) {
    var width = getRandomSize(200, 400);
    var height = getRandomSize(200, 400);
    allImages = html `<img src="https://placekitten.com/${width}/${height}" alt="pretty kitty"></img>`;
    document.querySelector('.galleryDiv').append(allImages)
}

//WHEN SWITCHING OFF HOMEPAGE AND GOING BACK TO HOMEPAGE, THIS DOES NOT RE-POPULATE THE GALLERY SECTION
