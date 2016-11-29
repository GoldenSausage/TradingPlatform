var timer;
var mainBlue = "#0066ff";
var mainOrange = "#f15c22";
//flash();

$(window).bind("load", function() {
    adjustBackground();
});
    
$( window ).resize(function() {
    adjustBackground();
});

function adjustContainerHeight(){
    element = document.getElementById("containerId");
    containerId.style.set.height = document.getElementById("navMenu").offsetHeight+"px";
}
function flash(){
    element=document.getElementById("billGates");
    alternateDisplay(element);
}
function alternateDisplay(element){
    clearTimeout(timer);
    console.log(element.style.visibility);
    if (element.style.visibility == "hidden"){
        
        element.style.visibility = "visible";
    }
    else{
        
        element.style.visibility = "hidden";
    }
    timer = setTimeout(flash, 100);
}
function selectAction(selection){
    actions = document.getElementsByClassName("actionButtons");
    panels = document.getElementsByClassName("actionPanel");
    for (i = 0; i < actions.length; i++){
        if (actions[i].innerHTML == selection){
            actions[i].style.backgroundColor = mainBlue;
            panels[i].style.display = "block";
        }
        else{
            actions[i].style.backgroundColor = "black";
            panels[i].style.display = "none";
        }
    }
}
/*
function selectLogin(){
    login = document.getElementById("login");
    register = document.getElementById("register");
    loginButton = document.getElementById("loginAction");
    registerButton = document.getElementById("registerAction");
    loginButton.style.backgroundColor = "#f15c22";
    registerButton.style.backgroundColor = "black";
    login.style.display="block";
    register.style.display="none";
}
function selectRegister(){
    login = document.getElementById("login");
    register = document.getElementById("register");
    loginButton = document.getElementById("loginAction");
    registerButton = document.getElementById("registerAction");
    registerButton.style.backgroundColor = "#f15c22";
    loginButton.style.backgroundColor = "black";
    login.style.display="none";
    register.style.display="block";
}*/
function changeRoleSelectorHTML(html){
    roleSelector = document.getElementById("roleSelector");
    roleSelector.innerHTML = html;
}
function adjustBackground(){
    bg = document.getElementsByClassName("background");
    bg[0].style.height = "100hv";
}

function test(){
    console.log("tested");
}