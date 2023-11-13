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
  modalbg.style.display = "none";
});
// Valider le formulaire avec Merci 
// Gestionnaire d'événements pour le bouton de soumission
const submitButton = document.querySelector(".btn-submit");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche la soumission par défaut du formulaire

  if (validateForm()) {
    // Le formulaire est valide, procédez à la soumission ou affichez le message de remerciement
    modalbg.innerHTML = `
      <div class="content">
        <span class="close"></span>
        <div class="modal-body">
          <p>Merci pour votre inscription</p>
          <button class="btn-submit" id="closeThankYou">Fermer</button>
        </div>
      </div>
    `;

    // Gestionnaires d'événements pour le nouveau contenu de la modale
    document.getElementById("closeThankYou").addEventListener("click", function() {
      modalbg.style.display = "none";
    });

    const newCloseButton = modalbg.querySelector(".close");
    newCloseButton.addEventListener("click", function() {
      modalbg.style.display = "none";
    });

    modalbg.style.display = "block";
  } else {
    // Le formulaire n'est pas valide, affichez les messages d'erreur
    // Les messages d'erreur sont déjà gérés dans la fonction validateForm()
  }
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

if (email.value.indexOf('@') === -1) { // Vérifier si l'email contient '@'
  formDataEmail.setAttribute('data-error', 'Une adresse email valide doit contenir un @.');
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

  return isValid;
}