//;-;
const firebaseConfig = {
      apiKey: "AIzaSyA4OS4WCt6RElRCWdN52kpjddVixudWgdg",
      authDomain: "i-m-a-bird-named-kwitter.firebaseapp.com",
      databaseURL: "https://i-m-a-bird-named-kwitter-default-rtdb.firebaseio.com",
      projectId: "i-m-a-bird-named-kwitter",
      storageBucket: "i-m-a-bird-named-kwitter.appspot.com",
      messagingSenderId: "183406393329",
      appId: "1:183406393329:web:a47f876a556f92098f3650",
      measurementId: "G-0PC0526HQJ"
    };
    
    // ;-;
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome :D" + user_name + "!";
    
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose :"adding room name"
});

   localStorage.setItem("room_name", room_name);

   window.location = "kwitter_page.html";

   
    }
    function getData() {
          firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot){ childKey = childSnapshot.key;
      Room_names = childKey;
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="kwitter_page.html";
}