/*File name:public/Scripts/app.js
Student name: Pak Tak Lau 
Student ID: 301224147   
Date: 19 Oct 2022*/

// IIFe- Immediately Invoked function Expression
(function(){
    function start(){
        console.log("App started...")
    }
    window.addEventListener("load", start);

})

//used to redirect the website in contact form
function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("Your information has been captured " + fname + "! You will now be redirected to home page");
  }