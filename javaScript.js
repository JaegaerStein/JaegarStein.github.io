//notification
console.log(Notification.permission);

if (Notification.permission === "granted"){
    window.alert("Welcome to my website, I hope you enjoy the photos! Feel free to enter your information at the bottom of the page to book appointments for photo shoots.");
}else if (Notification.permission !== "denied"){
    Notification.requestPermission().then(permission => {
        if (permission === "granted"){
            window.alert("Welcome to my website, I hope you enjoy the photos! Feel free to enter your information at the bottom of the page to book appointments for photo shoots.");
        }
    });
}
//color scheme buttons
var color1Button = document.getElementById("color1");
var color2Button = document.getElementById("color2");
var color3Button = document.getElementById("color3");

color1Button.addEventListener("click", changeColorScheme);
color2Button.addEventListener("click", changeColorScheme);
color3Button.addEventListener("click", changeColorScheme);

function changeColorScheme() {
  // Get a reference to the <body> element
  var body = document.getElementsByTagName("body")[0];
  var header = document.getElementsByTagName("h1")[0];
  var image = document.getElementsByTagName("img")[0];
  var video = document.getElementsByTagName("iframe")[0];
  var photos = document.getElementsByTagName("div")[0];
  // Check which button was clicked
  if (this.id === "color1") {
    body.style.backgroundColor = "pink";
    header.style.borderColor = "#7a5c58";
    image.style.borderColor = "#7a5c58";
    video.style.borderColor = "#7a5c58";
    photos.style.backgroundColor = "#7a5c58";
    photos.style.borderColor = "#7a5c58";

  } else if (this.id === "color2"){
    body.style.backgroundColor = "teal";
    header.style.borderColor = "red";
    image.style.borderColor = "red";
    video.style.borderColor = "red";
    photos.style.backgroundColor = "red";
    photos.style.borderColor = "red";

  } else if (this.id === "color3"){
    body.style.backgroundColor = "beige";
    header.style.borderColor = "maroon";
    image.style.borderColor = "maroon";
    video.style.borderColor = "maroon";
    photos.style.backgroundColor = "maroon";
    photos.style.borderColor = "maroon";
  }
}
//form conditional and event listener
const form = document.querySelector('#photo-shoot-form');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (firstName.value.trim() === '' || lastName.value.trim() === '' || email.value.trim() === '') {
    alert('Please fill in all fields.');
  } else {
    form.submit();
  }
});
