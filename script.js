// const emailInput = document.getElementById('mail');
const button = document.getElementById("button");
const emailInput = document.getElementById("mail");
const emailPattern = new RegExp('^ewusidavid8@gmail.com$');


button.addEventListener("click", (e) =>{
  e.preventDefault();

  const email = emailInput.value;
  console.log(emailPattern.test(email));

  
if (emailPattern.test(email)) {  
  alert('Valid Email');
  emailInput.style.borderColor = "green";
  emailInput.style.border = "5px green solid";
  
  
  setTimeout(()=>{
    emailInput.style.borderColor = "white";
    emailInput.style.border = "1px white solid";

  }, 5000 );

 
} else {
  alert('Invalid Email');
  emailInput.style.borderColor = "red";
  emailInput.style.border = "5px red solid";

  
  setTimeout(()=>{
    emailInput.style.borderColor = "white";
    emailInput.style.border = "1px white solid";

  }, 5000 );

  
} ;
});

