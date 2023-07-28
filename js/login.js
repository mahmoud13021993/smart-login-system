let userNameInput = document.getElementById("userName");
let userEmailInput = document.getElementById("userEmail");
let userPassowrdInput = document.getElementById("userPassword");
let btnSignUp = document.getElementById("btnSignUp");
let message = document.getElementById("message");
let userEmailLogin = document.getElementById("userEmailLogin");
let userPasswordLogin = document.getElementById("userPasswordLogin");
let btnLogin = document.getElementById("btnLogin");
let userLogin = document.getElementById("userLogin");
let erorrMassge= document.getElementById("erorrMassge");
let userDataList;
if(localStorage.getItem("loginData") === null) {
    userDataList = [];  
} else {
    userDataList = JSON.parse(localStorage.getItem("loginData"))
}
 
btnSignUp.onclick = function() {
    if (userNameInput.value == "" && userEmailInput.value == "" && userPassowrdInput.value == "")  {
        message.innerHTML = "All inputs is required";
        message.setAttribute("class", "text-danger text-center mt-2")
    } 
    let userData = {
        userName: userNameInput.value,
        userEmail: userEmailInput.value,
        userPassowrd: userPassowrdInput.value
       }
    
    if (userEmailValidation() === true && userPaswordValidation() === true){
            if(checkEmail() === true) {
               return console.log("the name is Exist");
            } else {
                    userDataList.push(userData);
                    localStorage.setItem("loginData", JSON.stringify(userDataList));
                    console.log(userDataList);
                    reset();
                    message.innerHTML = "Success";
                    message.setAttribute("class", "text-success text-center mt-2")
        
            }
    }
 }
 function checkEmail() {
    for(let i=0;i<userDataList.length;i++) {
        if(userDataList[i].userEmail === userEmailInput.value) {
            alert("the name is Exist")
            return true;
        } 
    }
    
 }
 function userEmailValidation() {
    let rgex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    let userEmailValidat = userEmailInput.value;
    if(rgex.test(userEmailValidat)) {
        console.log("match")
        return true;
    }else {
        console.log("No match")
        return false; 
    }
}
function userPaswordValidation() {
    let rgex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    let userPassowrdValidat = userPassowrdInput.value;
    if(rgex.test(userPassowrdValidat)) {
        console.log("match")
        return true;
    }else {
        console.log("No match")
        return false; 
    }
}
function reset() {
    userEmailInput.value = "";
    userNameInput.value = "" ;
    userPassowrdInput.value = "";

}


btnLogin.onclick = function() {
for (let i=0;i<userDataList.length;i++) {
if (userEmailLogin.value === "" && userPasswordLogin.value === "" ) {
    erorrMassge.innerHTML  ="Enter Email and password !!!";
     }else if( userEmailLogin.value === userDataList[i].userEmail && userPasswordLogin.value === userDataList[i].userPassowrd) {
        location.assign("toDoList.html");
        var x = userEmailLogin.value;
        localStorage.setItem('user',JSON.stringify(x));
       
    } else {
        erorrMassge.innerHTML  = "invalid Email or password !!!";
    } 
}

}
let x ;
var y = JSON.parse(localStorage.getItem("user"));
for(let i=0;i<userDataList.length;i++) {
    if(y === userDataList[i].userEmail){
       x = userDataList[i].userName;
    }
}


userLogin.innerHTML = `${x}`;

  
