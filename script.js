const button = document.getElementById("button");
const emailInput = document.getElementById("mail");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const mailForm = document.getElementById("mailForm");


button.addEventListener("click", (e) =>{
  e.preventDefault();
  e.stopPropagation();

  const email = emailInput.value;
  console.log(emailPattern.test(email));

  
if (emailPattern.test(email)) {  
  alert('Valid Email');
  emailInput.style.borderColor = "green";
  emailInput.style.border = "5px green solid";

  
  setTimeout(()=>{
    emailInput.style.borderColor = "white";
    emailInput.style.border = "1px white solid";

  }, 3000 );

  setTimeout(() => {
    mailForm.submit();
  }, 3000);

  setTimeout(() => {
    window.open("recipe.html", "_self")
  }, 3000);
 
 
} else {
  alert('Invalid Email');
  emailInput.style.borderColor = "red";
  emailInput.style.border = "5px red solid";

  
  setTimeout(()=>{
    emailInput.style.borderColor = "white";
    emailInput.style.border = "1px white solid";

  }, 3000 );

  setTimeout(() => {
    mailForm.submit();
  }, 3000);

  
} ;
});

