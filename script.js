let forms=document.forms;
let loginform=forms.loginform;
let emailele=loginform.email;
let passwordele=loginform.password
console.log(emailele,passwordele)

function login(event)
{
    event.preventDefault();
    let email =emailele.value;
    let password=passwordele.value;
    if(email=="")
    {
        emailele.style.border="2px solid red";
        return
    }
    if(password=="")
    {
        passwordele.style.border="2px solid red";
        return
    }
    

alert("login done")
}
function removeBorder(event)
{
    event.target.style.border=none
    
}