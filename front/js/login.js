const form = document.getElementById("form");
const email = document.getElementById("email");


form.addEventListener('submit', e => {
  e.preventDefault(); //prevent the form from submitting until we validate.
          
  validateData();
});


const setMessage = (element, message) =>{
  const inputControl = element.parentElement;
  const error = inputControl.querySelector(".error");

  error.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

const setSuccess = (element) =>{
  const inputControl = element.parentElement;
  const error = inputControl.querySelector(".error");

  error.innerText = '';
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

const validateData = ()=>{
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(emailValue == ""){
    setMessage(email, 'please fill out your email.');
  }
  else{
    setSuccess(email);
  }

  if(passwordValue == ""){
    setMessage(password, 'please enter your password');
  }else{
    setSuccess(password);
  }
}

// const validateEmail = () =>{
//   const emailValue = email.value.trim();
//   const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if(!emailRegx.test(emailValue)){
//     setMessage(email, "please enter a valid email!");
//     }
//     else if(emailValue == ""){
//       setMessage(email, "enter your email please.")
//     }else{
//       setSuccess(email);
//     }

// }

