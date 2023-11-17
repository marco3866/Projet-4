function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Fermeture de la modale avec la croix
// Gestionnaire d'événements pour la croix de fermeture
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function() {
  modalbg.style.display = "none"; // Ferme la modale
  form.reset(); // Réinitialise le formulaire
});
// Sélection du formulaire et de la modale de remerciement
const form = document.querySelector("form[name='reserve']");
const thankYouModal = document.getElementById("thankYouModal");

// Soumission du formulaire
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche la soumission automatique du formulaire
  if (validateForm()) {
    modalbg.style.display = "none"; // Ferme la modale d'inscription
    thankYouModal.style.display = "block"; // Affiche la modale de remerciement
    form.reset(); // Réinitialise le formulaire
  }
});

// Attacher les gestionnaires d'événements pour fermer la modale de remerciement
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("closeThankYou").addEventListener("click", function() {
    thankYouModal.style.display = "none";
  });

  document.getElementById("thankYouCloseButton").addEventListener("click", function() {
    thankYouModal.style.display = "none"; // Ferme la modale de remerciement
    form.reset();
  });
});
 
// SI ERREUR
function validateForm() {
  var isValid = true;
  var firstName = document.getElementById('first');
  var formDataFirst = firstName.closest('.formData');

  // Validation du prénom
  if (firstName.value.length < 2) {
    formDataFirst.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    formDataFirst.setAttribute('data-error-visible', 'true');
    isValid = false;
  } else {
    formDataFirst.removeAttribute('data-error');
    formDataFirst.setAttribute('data-error-visible', 'false');
  }
  // Validation pour le nom
  var lastName = document.getElementById('last');
  var formDataLast = lastName.closest('.formData');

  if (lastName.value.length < 2) {
    formDataLast.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    formDataLast.setAttribute('data-error-visible', 'true');
    isValid = false;
  } else {
    formDataLast.removeAttribute('data-error');
    formDataLast.setAttribute('data-error-visible', 'false');
  }
// Validation pour l'email
var email = document.getElementById('email');
var formDataEmail = email.closest('.formData');

// Expression régulière pour la validation de l'email
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

if (!emailRegex.test(email.value)) {
  formDataEmail.setAttribute('data-error', 'Veuillez entrer une adresse email valide.');
  formDataEmail.setAttribute('data-error-visible', 'true');
  isValid = false;
} else {
  formDataEmail.removeAttribute('data-error');
  formDataEmail.setAttribute('data-error-visible', 'false');
}

// Validation pour la date de naissance
var birthdate = document.getElementById('birthdate');
var formDataBirthdate = birthdate.closest('.formData');

if (!birthdate.value) { // Vérifier si une date a été sélectionnée
  formDataBirthdate.setAttribute('data-error', 'Veuillez sélectionner une date de naissance.');
  formDataBirthdate.setAttribute('data-error-visible', 'true');
  isValid = false;
} else {
  formDataBirthdate.removeAttribute('data-error');
  formDataBirthdate.setAttribute('data-error-visible', 'false');
}
// Validation pour la quantité
var quantity = document.getElementById('quantity');
var formDataQuantity = quantity.closest('.formData');

// Vérifier si la quantité est dans la plage autorisée (0-99)
if (quantity.value < 0 || quantity.value > 99 || quantity.value === "") {
  formDataQuantity.setAttribute('data-error', 'Veuillez entrer un nombre entre 0 et 99.');
  formDataQuantity.setAttribute('data-error-visible', 'true');
  isValid = false;
} else {
  formDataQuantity.removeAttribute('data-error');
  formDataQuantity.setAttribute('data-error-visible', 'false');
}
  // Ajoutez ici des validations supplémentaires pour les autres champs en suivant une logique similaire
  // Validation pour les conditions d'utilisation
  var checkbox = document.getElementById('checkbox1');
  var formDataCheckbox = checkbox.closest('.formData');

  if (!checkbox.checked) { // Vérifier si la case est cochée
    formDataCheckbox.setAttribute('data-error', 'Vous devez accepter les conditions d\'utilisation.');
    formDataCheckbox.setAttribute('data-error-visible', 'true');
    isValid = false;
  } else {
    formDataCheckbox.removeAttribute('data-error');
    formDataCheckbox.setAttribute('data-error-visible', 'false');
  }

// Validation pour la sélection d'une ville
var locationRadios = document.querySelectorAll('input[name="location"]');
var formDataLocation = document.querySelector('.location-selection'); // Ciblez le conteneur spécifique

var isLocationSelected = false;
for (var i = 0; i < locationRadios.length; i++) {
  if (locationRadios[i].checked) {
    isLocationSelected = true;
    break;
  }
}

if (!isLocationSelected) {
  formDataLocation.setAttribute('data-error', 'Veuillez choisir une ville.');
  formDataLocation.setAttribute('data-error-visible', 'true');
  isValid = false;
} else {
  formDataLocation.removeAttribute('data-error');
  formDataLocation.setAttribute('data-error-visible', 'false');
}
  return isValid;
}
