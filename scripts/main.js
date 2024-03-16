//  Код переключения изображения

var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/my-image.jpg") {
    myImage.setAttribute("src", "images/my-image2.jpg");
  } else {
    myImage.setAttribute("src", "images/my-image.jpg");
  }
};

// Код персонального приветсвия

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Пожалуйста, введите свое имя.");
  localStorage.setItem("имя", myName);
  myHeading.textContent = "Чифирок в радость, " + myName;
}
if (!localStorage.getItem("имя")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("имя");
  myHeading.textContent = "Чифирок в радость, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};