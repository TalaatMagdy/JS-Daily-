const increase_number = () =>{
    const increase_element = document.getElementById('increase');
    const counter = Number(increase_element.textContent);
    if(counter <10 && counter >=0) {
        increase_element.textContent = counter + 1;
    }else {
        clearInterval(increase);

        setTimeout(() => {
            increase_element.textContent = "Everything's broken now :(";
        }, 22000);
    }
};

const decrease_number = () =>{
    const decrease_element = document.getElementById('decrease');
    const counter = Number(decrease_element.textContent);
    if(counter <= 10 && counter >0) {
        decrease_element.textContent = counter - 1;
    }else {
        clearInterval(decrease);
        // Modify the title after 10 seconds
        setTimeout(() => {
            decrease_element.textContent = "Everything's broken now :(";
        }, 22000);
    }

};

const increase = setInterval(increase_number, 1000);
const decrease =setInterval(decrease_number, 1000);
