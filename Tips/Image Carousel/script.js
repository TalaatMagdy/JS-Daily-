var images = [
    "images/download-.jpeg",
    "images/download.jpeg",
    "images/images.jpeg",
    "images/images1.jpeg",
    "images/slider.jpeg",
];
var currentIndex = 0;
var img = document.querySelector('img');
var next = document.getElementById('next-button');
var prev = document.getElementById('prev-button');

var incrementIndex = function(){
    //write your code here
    if(currentIndex===images.length-1){
        currentIndex=0;

    }else{
        currentIndex +=1;

    }
}

// create an event listener for a #next-button click
// increment the index
// set the img src to the next URL in the images array
next.addEventListener("click", function(){
    incrementIndex();
    img.src=images[currentIndex];
});

var decrementIndex = function(){
    //write your code here
    if(currentIndex===0){
        currentIndex=images.length-1;

    }else{
        currentIndex -=1;

    }
}
// copy your event listener code for the #next-button click here
prev.addEventListener("click", function(){
    decrementIndex();
    img.src=images[currentIndex];
});
// create an event listener for a #prev-button click
// decrement the index
// set the img src to the previous URL in the images array