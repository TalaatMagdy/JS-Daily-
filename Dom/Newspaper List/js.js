// Newspaper list
const newspapers = [
    "https://www.nytimes.com",
    "https://www.washingtonpost.com",
    "http://www.economist.com"
];

const div = document.getElementById('content');
for(newspaper of newspapers){
    const link = document.createElement('a');
    link.textContent=newspaper;
    link.href=newspaper;
    div.appendChild(link);
    // Add a <br> tag
    div.appendChild(document.createElement("br"));
}


//Write-Your-Code-Here
