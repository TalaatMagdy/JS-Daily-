function has(id, someClass){
    // Write - Your - Code
    const element = document.getElementById(id);
    if (element !== null) {
        return element.classList.contains(someClass)
    } else {
        return "ID not found";
    }
}