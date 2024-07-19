const firebaseConfig = {
    apiKey: "AIzaSyCfkf9Xo67I4hsRSQV8GylXNAQeetiWorA",
    authDomain: "kwitter-project-90bd3.firebaseapp.com",
    databaseURL: "https://kwitter-project-90bd3-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-90bd3",
    storageBucket: "kwitter-project-90bd3.appspot.com",
    messagingSenderId: "391519965352",
    appId: "1:391519965352:web:1d8b3081e045199468329d"
};
firebase.initializeApp(firebaseConfig)
var user_name = ""
var password1 = ""
function addUser(){
    user_name = document.getElementById("user_name").value
    password1 = document.getElementById("passward_value").value
    localStorage.setItem("User Name", user_name)
    localStorage.setItem("Password", password1)
    if (user_name == ""){
        document.getElementById("error").style.color = "Red"
        document.getElementById("error").innerHTML = "Error, Please enter username"
        document.getElementById("error").style.fontSize = "20px"
        setTimeout(function time(){
            document.getElementById("error").innerHTML = ""
        }, 1000)
    }else if(password1 == ""){
        document.getElementById("error").style.color = "Red"
        document.getElementById("error").innerHTML = "Error, Please enter password"
        document.getElementById("error").style.fontSize = "20px"
        setTimeout(function time(){
            document.getElementById("error").innerHTML = ""
        }, 1000)
    }else{
        
        window.location = "index2.html"
    }
}
window.addEventListener("DOMContentLoaded", loadUser)
function loadUser(){
    firebase.database().ref(localStorage.getItem("User Name")).child("user").update({
        user_namez : localStorage.getItem("User Name"),
        password: localStorage.getItem("Password")
    })
    document.getElementById("user2_name").innerText = localStorage.getItem("User Name")
}

function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("rooms").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log(Room_names)
    var row = "<p style='width:90%; height:400px;border-radius: 25px; background-color: rgba(0, 0, 0, 0);margin:35px;color:white;' onclick='loadRoom(this.id)' id='" + Room_names+"'>"+"#"+Room_names+"</p>"
    document.getElementById("rooms").innerHTML += row;
    //End code
});});}
getData()
function Add(){
    firebase.database().ref("/").child(room_name).update({
        purpose : "rooms"
    })
    window.location = "index3.html"
}


function loadRoom(names){
    room_name = localStorage.setItem("Room_Name", names)
    window.location = "index3.html"
}
function logout(){
    localStorage.clear()
    window.location="index.html"
}
function sendMessage(){
    msg = document.getElementById("msg").value 
    firebase.database().ref(room_name).push({
        message: msg,
        likes:0,
        name:user_name
    })
    document.getElementById("msg").innerHTML = ""
}


