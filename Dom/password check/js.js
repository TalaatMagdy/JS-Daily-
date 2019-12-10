///Write-Your-Code-Here
const checkLength = (password1,password2)=>{
    let check="";
    if(password1 === password2){
        if(password1.length>6){
            if(password1.include("/[0-9]+/i")){
                check = "accept password"
            }
        }else{
            check = "password must be at least 6 charachters long"
        }

    }else{
        check ="passowrd not matched"
    }

    return check;
};

document.querySelector('form').addEventListener('submit', e=>{
    const helppassword = document.getElementById('passwordHelp');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');

    helppassword.textContent = checkLength(password1, password2);
});