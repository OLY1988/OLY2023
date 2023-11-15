// script.js
function playAudio() {
    var audio = document.querySelector('audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Récupération des données du formulaire
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre normalement

    // Récupération des valeurs saisies dans le formulaire
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Création du message affichant les informations du formulaire
    var submittedInfo = document.createElement('div');
    submittedInfo.innerHTML = '<h3>Informations soumises :</h3>' +
        '<p><strong>Nom :</strong> ' + name + '</p>' +
        '<p><strong>Email :</strong> ' + email + '</p>' +
        '<p><strong>Message :</strong> ' + message + '</p>';

    // Affichage des informations sous le formulaire
    var submittedInfoSection = document.querySelector('.submitted-info');
    submittedInfoSection.innerHTML = ''; // Efface le contenu précédent
    submittedInfoSection.appendChild(submittedInfo);
});
