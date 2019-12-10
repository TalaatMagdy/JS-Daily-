var addTodo = function(){
    //get ul
    var ul = document.querySelector('#todoList');

    //create dynamic li
    var li = document.createElement('li');
    //create id for each li
    //li.setAttribute('id',item.value);

    //create textNode with input value and append it to li
    var input = document.querySelector('#todo');
    if(input.value !== ''){
        //append textNode into li
        li.innerHTML=input.value;
        input.value = "";
        ul.appendChild(li);

    }else {
        li.appendChild('');

    }

}

var button = document.getElementById('addTodo');

button.onclick = function() {
    addTodo();
}