function validateForm(){
    //first name
   let firstname= document.getElementById('firstname');
   if(firstname.value.trim() == ''){
    alert('Please enter your first name ');
    firstname.focus();
    return false;
   }
  if(firstname.value.trim().length < 3){
    alert('Name should be min 3 character');
    firstname.focus();
    return false;
  }
//last name
  let lastname= document.getElementById('lastname');
  if(lastname.value.trim() == ''){
   alert('Please enter your last name ');
   lastname.focus();
   return false;
  }
 if(lastname.value.trim().length < 3){
   alert('Name should be min 3 character');
   lastname.focus();
   return false;
 }
//email
let email= document.getElementById('email');
if(email.value.trim()==''){
    alert('Please enter your emailid');
    email.focus();
    return false;

}

let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    if(emailPattern.test(email.value.trim()) == false){
        alert('Please enter a valid emailid');
        email.focus();
        return false;
 }
//mobile no.
 let mobile = document.getElementById('mobile');
 if(mobile.value.trim() == ''){
     alert('PLease enter your mobile no');
     mobile.focus();
     return false;
 }

 if(mobile.value.trim().length != 10){
     alert('Please enter a 10 digit contact number');
     mobile.focus();
     return false;
 }
 //gender
    let male = document.getElementById('male');
    let female = document.getElementById('rdfemale');

    if(male.checked == false && female.checked == false){
        alert('Please select your gender');
        return false;
    }
//address
    let address = document.getElementById('address');
    if(address.value == ''){
        alert('Please enter your address');
        address.focus();
        return false;
    }
    //state
    let statename = document.getElementById('statename');
    if(statename.value == ''){
        alert('Please select state name');
        return false;
    }
//password
    let pwd = document.getElementById('pwd');
    if(pwd.value.trim() == ''){
        alert('Please enter your password');
        pwd.focus();
        return false;
    }

    let conpwd = document.getElementById('conpwd');
    if(conpwd.value.trim() == ''){
        alert('Please enter confirm password');
        conpwd.focus();
        return false;
    }

    if(pwd.value.trim() != conpwd.value.trim()){
        alert('Password mismatch');
        conpwd.focus();
        return false;
    }

}

function validateNumber(e){
    let ac = e.charCode;
    if(!(ac == 8 || ac == 127) && (ac < 48 || ac > 57)){
        return false;
    } else {
        return true;
    }
}

