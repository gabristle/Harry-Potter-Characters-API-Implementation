function searchCharacter(){
    var url = 'https://hp-api.onrender.com/api/characters';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.responseText);
        }
    }
    xhr.send();
}