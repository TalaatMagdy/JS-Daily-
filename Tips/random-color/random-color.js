// random color generator
const randomColor = function(){
    const rvalue = function () {
        return Math.round(Math.random() * 255);
    };

    return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

// get button element from DOM
const button = document.querySelector('button');

// create event listener to change background color on button click
button.onclick = function(){
    this.style.backgroundColor = randomColor();
}