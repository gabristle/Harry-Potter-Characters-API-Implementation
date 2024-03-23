function searchCharacter(){
    var characterName = document.getElementById('search--input').value.trim();
    var url = 'https://hp-api.onrender.com/api/characters?name=Harry%20Potter';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            var characters = JSON.parse(xhr.responseText);
            var foundCharacter = characters.find(function(character) {
                return character.name.toLowerCase() === characterName.toLowerCase();
            });
            if (foundCharacter) {
                console.log(foundCharacter);
                displayCharacter(foundCharacter);
            }else{
                displayError(foundCharacter);
            }
        }
    }
    xhr.send();
}

function displayCharacter(character){
    displayReset();
    var descName = document.getElementById('desc--name');
    var descSpecies = document.getElementById('desc--species');
    var descGender = document.getElementById('desc--gender');
    var descHouse = document.getElementById('desc--house');
    var descDateOfBirth = document.getElementById('desc--date-of-birth');
    var descAncestry = document.getElementById('desc--ancestry');
    var descEye = document.getElementById('desc--eye-colour');
    var descHair = document.getElementById('desc--hair-colour');

    descName.textContent = character.name;
    descSpecies.textContent = character.species;
    descGender.textContent = character.gender;
    descHouse.textContent = character.house;
    descDateOfBirth.textContent = character.dateOfBirth;
    descAncestry.textContent = character.ancestry;
    descEye.textContent = character.eyeColour;
    descHair.textContent = character.hairColour;
    
    var img = document.getElementById('desc--img');
    img.src = character.image;
    img.alt = character.name;
}

function displayError(character){
    displayReset();
    var errorMessage = document.getElementById('search--error');
    errorMessage.textContent = `The character you searched don't exist`;
}

function displayReset(){
    var descName = document.getElementById('desc--name');
    var descSpecies = document.getElementById('desc--species');
    var descGender = document.getElementById('desc--gender');
    var descHouse = document.getElementById('desc--house');
    var descDateOfBirth = document.getElementById('desc--date-of-birth');
    var descAncestry = document.getElementById('desc--ancestry');
    var descEye = document.getElementById('desc--eye-colour');
    var descHair = document.getElementById('desc--hair-colour');
    var img = document.getElementById('desc--img');
    descName.textContent = '';
    descSpecies.textContent = '';
    descGender.textContent = '';
    descHouse.textContent = '';
    descDateOfBirth.textContent = '';
    descAncestry.textContent = '';
    descEye.textContent = '';
    descHair.textContent = '';
    img.src = '';
    img.alt = '';
}