let selectedRating = null;

document.querySelectorAll('.rating').forEach(rating => {
    rating.addEventListener('click', () => {
        if (selectedRating){
            selectedRating.classList.remove('selected')
        }
        rating.classList.add('selected');
        selectedRating = rating;
    });
});

function submitForm() {
    if (selectedRating) {
        window.location.href = 'ty.html?bewertung=' + selectedRating.textContent;
    } else {
        alert('Bitte eine Bewertung auswählen');
    }
}


const urlParams = new URLSearchParams(window.location.search);
const bewertung = urlParams.get('bewertung');
if (bewertung) {
    document.getElementById('ratingfield').innerText = 'You selected ' + bewertung + ' out of 5';
}