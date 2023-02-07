// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAgBW3rvGCuzY7GmQkbh-pu_XWLo9rBfMc",
    authDomain: "project-101-dfc79.firebaseapp.com",
    databaseURL: "https://project-101-dfc79-default-rtdb.firebaseio.com",
    projectId: "project-101-dfc79",
    storageBucket: "project-101-dfc79.appspot.com",
    messagingSenderId: "464428362553",
    appId: "1:464428362553:web:2eecfa1078ba97946ed6e8"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name",user_name);
   window.location="chat_room.html";
}



