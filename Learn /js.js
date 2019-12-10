/**
if(document.body.nodeType === document.ELEMENT_NODE){
    console.log("This is True\n");
}else{
    console.log('This is false');
}

console.log(document.body.childNodes[2]);

const h1 = document.body.childNodes[3];
console.log(h1);
console.log(h1.parentNode);       // Show the body node
console.log(document.parentNode); //

const h1 = document.getElementById("first");
console.log(h1.textContent);

function countElements(myElement)
{
    let count_element  = document.querySelectorAll(myElement).length;
    return count_element;
}
 */
document.getElementById("languages").innerHTML += '<li id="c">C</li>';
document.getElementById("languages").innerHTML += '<li id="ruby">Ruby</li>';


// Modify the title's text content
document.querySelector("h3").textContent += " for programming";
document.querySelector("h3").setAttribute("id", "title");