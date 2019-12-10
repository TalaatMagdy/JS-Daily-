//Write-Your-Code-Here
const ultag = document.getElementById('languageList');
const url ='https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt';
fetch(url)
    .then(Response => Response.text())
    .then(text => {
        let languages = text.split(';');
        for(const language of languages){
            const li_element = document.createElement('li');
            li_element.textContent = language;
            ultag.appendChild(li_element);
        }
    })
    .catch(err => {
        console.error(err.message);
    });