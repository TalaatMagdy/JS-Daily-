
// Write your code here
var img = document.querySelector('div > img');
img.onclick = function(){
    this.classList.toggle('invisible');  }
img.onmouseleave = function(){
    this.classList.remove('invisible');
}