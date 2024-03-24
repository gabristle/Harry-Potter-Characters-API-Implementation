function searchCharacter(){
    var characterName = document.getElementById('search--input').value.trim();
    var url = 'https://hp-api.onrender.com/api/characters';
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
                document.getElementById('desc').classList.remove('disabled');
            }else{
                displayError();
                document.getElementById('desc').classList.add('disabled');
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
    
    var imgCharacter = document.getElementById('desc--img-character');
    imgCharacter.src = character.image;
    imgCharacter.alt = character.name;

    var imgHouse = document.getElementById('desc--img-house');
    if(descHouse.textContent == 'Gryffindor'){
        imgHouse.src = 'assets/gryffindor.webp';
        imgHouse.alt = 'Gryffindor logo';
    }else if(descHouse.textContent == 'Slytherin'){
        imgHouse.src = 'assets/slytherin.webp';
        imgHouse.alt = 'Slytherin logo';
    }else if(descHouse.textContent == 'Hufflepuff'){
        imgHouse.src = 'assets/hufflepuff.webp';
        imgHouse.alt = 'Hufflepuff logo';
    }else if(descHouse.textContent == 'Ravenclaw'){
        imgHouse.src = 'assets/ravenclaw.webp';
        imgHouse.alt = 'Ravenclaw logo';
    }
}

function displayError(){
    displayReset();
    var errorMessage = document.getElementById('search--error');
    errorMessage.textContent = `The character you searched doesn't exist`;
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
    var imgCharacter = document.getElementById('desc--img-character');
    descName.textContent = '';
    descSpecies.textContent = '';
    descGender.textContent = '';
    descHouse.textContent = '';
    descDateOfBirth.textContent = '';
    descAncestry.textContent = '';
    descEye.textContent = '';
    descHair.textContent = '';
    imgCharacter.src = '';
    imgCharacter.alt = '';
}

