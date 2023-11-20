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
const closeButton = document.querySelector(".close");
const form = document.querySelector("form[name='reserve']");
const thankYouModal = document.getElementById("thankYouModal");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture de la modale avec la croix
// Gestionnaire d'événements pour la croix de fermeture
closeButton.addEventListener("click", function() {
  modalbg.style.display = "none"; // Ferme la modale
  // Ne réinitialise pas le formulaire ici pour permettre à l'utilisateur de corriger ses entrées
});

// Soumission du formulaire
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche la soumission automatique du formulaire
  if (validateForm()) {
    // Valide le formulaire
    modalbg.style.display = "none"; // Ferme la modale d'inscription
    thankYouModal.style.display = "block"; // Affiche la modale de remerciement
    // Réinitialise le formulaire seulement si la validation est réussie
    form.reset();
  }
  // Sinon, les erreurs sont déjà affichées et le formulaire n'est pas réinitialisé
});

// Attacher les gestionnaires d'événements pour fermer la modale de remerciement
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("closeThankYou").addEventListener("click", function() {
    thankYouModal.style.display = "none"; // Ferme la modale de remerciement
  });

  // Ne réinitialise pas le formulaire ici pour permettre à l'utilisateur de voir la confirmation de l'inscription
  document.getElementById("thankYouCloseButton").addEventListener("click", function() {
    thankYouModal.style.display = "none"; // Ferme la modale de remerciement
  });
});

function validateForm() {
  const isFirstNameValid = validateFirstName();
  const isLastNameValid = validateLastName();
  const isBirthdateValid = validateBirthdate();
  const isEmailValid = validateEmail();
  const isQuantityValid = validateQuantity();
  const isCheckboxValid = validateCheckbox();
  const isLocationValid = validateLocation();
  

  return isFirstNameValid && isLastNameValid && isBirthdateValid && isEmailValid && isQuantityValid && isCheckboxValid && isLocationValid; // et les autres validations
}

// Validation pour le prenom
function validateFirstName() {
  const firstName = document.getElementById('first');
  const formDataFirst = firstName.closest('.formData');

  if (firstName.value.length < 2) {
    formDataFirst.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    formDataFirst.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formDataFirst.removeAttribute('data-error');
    formDataFirst.setAttribute('data-error-visible', 'false');
    return true;
  }
}
// NOM
function validateLastName() {
  const lastName = document.getElementById('last');
  const formDataLast = lastName.closest('.formData');
  if (lastName.value.length < 2) {
    formDataLast.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    formDataLast.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formDataLast.removeAttribute('data-error');
    formDataLast.setAttribute('data-error-visible', 'false');
    return true;
  }
}
// EMAIL
function validateEmail() {
  const email = document.getElementById('email');
  const formDataEmail = email.closest('.formData');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email.value)) {
    formDataEmail.setAttribute('data-error', 'Veuillez entrer une adresse email valide.');
    formDataEmail.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formDataEmail.removeAttribute('data-error');
    formDataEmail.setAttribute('data-error-visible', 'false');
    return true;
  }
}
// Anniversaire
function validateBirthdate() {
  const birthdate = document.getElementById('birthdate');
  const formDataBirthdate = birthdate.closest('.formData');
  const dateValue = birthdate.value; // La valeur sera au format 'YYYY-MM-DD'
  const dateObject = dateValue ? new Date(dateValue) : null;

  if (!dateValue) {
    formDataBirthdate.setAttribute('data-error', 'Veuillez sélectionner une date de naissance.');
    formDataBirthdate.setAttribute('data-error-visible', 'true');
    return false;
  } else if (dateObject && dateObject.getFullYear() < 1900) {
    formDataBirthdate.setAttribute('data-error', 'Veuillez entrer une année après 1900.');
    formDataBirthdate.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formDataBirthdate.removeAttribute('data-error');
    formDataBirthdate.setAttribute('data-error-visible', 'false');
    return true;
  }
}
// Validation pour la quantité
function validateQuantity() {
  const quantity = document.getElementById('quantity');
  const formDataQuantity = quantity.closest('.formData');

  if (quantity.value < 0 || quantity.value > 99 || quantity.value === "") {
    formDataQuantity.setAttribute('data-error', 'Veuillez entrer un nombre entre 0 et 99.');
    formDataQuantity.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formDataQuantity.removeAttribute('data-error');
    formDataQuantity.setAttribute('data-error-visible', 'false');
    return true;
  }
}
  // Check box
  function validateCheckbox() {
    const checkbox = document.getElementById('checkbox1');
    const formDataCheckbox = checkbox.closest('.formData');
  
    if (!checkbox.checked) {
      formDataCheckbox.setAttribute('data-error', 'Vous devez accepter les conditions d\'utilisation.');
      formDataCheckbox.setAttribute('data-error-visible', 'true');
      return false;
    } else {
      formDataCheckbox.removeAttribute('data-error');
      formDataCheckbox.setAttribute('data-error-visible', 'false');
      return true;
    }
  }

// Validation pour la sélection d'une ville
function validateLocation() {
  const locationRadios = document.querySelectorAll('input[name="location"]');
  const formDataLocation = document.querySelector('.location-selection'); // Ciblez le conteneur spécifique

  let isLocationSelected = false;
  for (let i = 0; i < locationRadios.length; i++) {
    if (locationRadios[i].checked) {
      isLocationSelected = true;
      break;
    }
  }

  if (!isLocationSelected) {
    formDataLocation.setAttribute('data-error', 'Veuillez choisir une ville.');
    formDataLocation.setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formDataLocation.removeAttribute('data-error');
    formDataLocation.setAttribute('data-error-visible', 'false');
    return true;
  }
}
  

