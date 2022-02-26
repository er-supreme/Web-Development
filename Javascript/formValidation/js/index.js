console.log("h");

const formName = document.getElementById("name");
const formMail = document.getElementById("email");
const formPhone = document.getElementById("phone");
let validName = false;
let validMail = false;
let validPhone = false;


formName.addEventListener("blur", () => {
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = formName.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log("true");
    formName.classList.remove("is-invalid");
    validName = true;
  } else {
    formName.classList.add("is-invalid");
    validName = false;
  }
});

formMail.addEventListener("blur", () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = formMail.value;
    console.log(regex, str);
    if (regex.test(str)) {
      console.log("true");
      formMail.classList.remove("is-invalid");
      validMail = true;
    } else {
      formMail.classList.add("is-invalid");
      validMail = false;
    }
  });

  
  formPhone.addEventListener("blur", () => {
    let regex = /^[0-9]{10}$/;
    let str = formPhone.value;
    console.log(regex, str);
    if (regex.test(str)) {
      console.log("true");
      formPhone.classList.remove("is-invalid");
      validPhone = true;
    } else {
      formPhone.classList.add("is-invalid");
      validPhone = false;
    }
  });
 
let submit = document.getElementById('submit');
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    
    if(validName && validMail && validPhone){

    let sucess = document.getElementById('success');
    success.classList.add('show');
    failure.classList.remove('show')
    }
    else{
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
    }


})