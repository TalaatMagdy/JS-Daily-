//console.log("Hello");

const click = () =>{
    const  span_count = document.getElementById("count");
    let countClick = Number(span_count.textContent);
    span_count.textContent = countClick + 1;
};

document.getElementById('click-count').addEventListener("click", click);
document.getElementById('deactivate-count').addEventListener("click",() =>{
    document.getElementById('click-count').removeEventListener("click",click);
});

document.getElementById('return-click').addEventListener("click",() =>{
    document.getElementById('click-count').addEventListener("click",click);
});
