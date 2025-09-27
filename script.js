const email=document.getElementById("email")
const password=document.getElementById("password")
const emailMsg=document.getElementById("emailMsg")
const passwordMsg=document.getElementById("passwordMsg")
const form=document.getElementById("signupForm")

email.addEventListener("input",()=>{
  if(email.value.length>3&&email.value.includes("@")&&email.value.includes(".")){
    emailMsg.textContent="All good to go"
    emailMsg.className="success"
  }else{
    emailMsg.textContent="Invalid email"
    emailMsg.className="error"
  }
})

password.addEventListener("input",()=>{
  if(password.value.length>8){
    passwordMsg.textContent="All good to go"
    passwordMsg.className="success"
  }else{
    passwordMsg.textContent="Password must be more than 8 characters"
    passwordMsg.className="error"
  }
})

form.addEventListener("submit",e=>{
  e.preventDefault()
  if(confirm("Are you sure you want to sign up?")){
    alert("Successful signup!")
  }else{
    location.reload()
  }
})
