const html = (strings, ...values) => new DOMParser().parseFromString(strings.map((string, i) => strings[i] + values[i]).join(''), "text/html").body.firstChild;

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
var allImages = "";


for (var i = 0; i < states.length; i++) {
    Images = html `
    <div class="overlaycontainer">
        <img src="https://source.unsplash.com/featured/?${states[i]}" alt="Random images from states" class="galleryImage">
        <div class="galleryoverlay">
            <div class="galleryoverlaytext">${states[i]}</div>
        </div>
    </div>
    `;


    document.querySelector('.galleryDiv').append(Images)
}

//WHEN SWITCHING OFF HOMEPAGE AND GOING BACK TO HOMEPAGE, THIS DOES NOT RE-POPULATE THE GALLERY SECTION
