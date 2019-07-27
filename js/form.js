// Can get element directly by name..
// eg. let product = document.getElementsByName("product[]");  

function validateForm() {
    let name = document.forms["registration-form"]["name"];
    let email = document.forms["registration-form"]["email"];  
    let age = document.forms["registration-form"]["age"];  
    let dob = document.forms["registration-form"]["dob"];
    let gender = document.forms["registration-form"]["gender"];  
    let nationality = document.forms["registration-form"]["nationality"]; 
    let product = document.forms["registration-form"]["product[]"];  

    // Name field
    let err = document.getElementById("err-name"); 
    if (!name.value)                                  
    { 
        err.innerHTML = "Please enter your name!";
        err.className += " show-error";
        name.focus(); 
        return false; 
    } 
    err.className = err.className.replace(" show-error","");


    // Email field
    err = document.getElementById("err-email"); 
    if (!email.value)                                  
    { 
        err.innerHTML = "Please enter your email id!";
        err.className += " show-error"; 
        email.focus(); 
        return false; 
    }
    err.className = err.className.replace(" show-error","");


    // Age field
    err = document.getElementById("err-age"); 
    if (!age.value)                                  
    { 
        err.innerHTML = "Please enter your age!";
        err.className += " show-error";
        age.focus(); 
        return false; 
    }
    err.className = err.className.replace(" show-error","");


    //DOB field
    err = document.getElementById("err-dob"); 
    if (!dob.value)                                  
    { 
        err.innerHTML = "Please enter your date of birth!";
        err.className += " show-error"; 
        dob.focus(); 
        return false; 
    }
    err.className = err.className.replace(" show-error","");


    //Gender field
    err = document.getElementById("err-gender"); 
    if (!gender.value)                                  
    { 
        err.innerHTML = "Please mention your gender!";
        err.className += " show-error";
        return false; 
    }
    err.className = err.className.replace(" show-error","");


    //Nationality field
    err = document.getElementById("err-nationality"); 
    if (!nationality.value)                                  
    { 
        err.innerHTML = "Please mention your nationality!";
        err.className += " show-error"; 
        return false; 
    }
    err.className = err.className.replace(" show-error","");


    //product field 
    err = document.getElementById("err-product");
    if (!product[0].checked && !product[1].checked && !product[2].checked  )                                  
    { 
        err.innerHTML = "Please select atleast one service!";
        err.className += " show-error"; 
        return false; 
    }
    err.className = err.className.replace(" show-error",""); 


    return true;
  }