var link = document.querySelector(".contact-btn");

var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=e-mail]");
var letter = popup.querySelector(".letter");
var error = document.querySelector(".input-error");
var defaultset = popup.querySelector(".required  [name=username]");

var storage = localStorage.getItem("username");


link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }

});
close.addEventListener("click", function (event) {
  popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function (event) {
  if (!username.value) {
    event.preventDefault();
    username.classList.add("input-error")
  } else {
    if (username.classList.contains("input-error")) {
      username.classList.remove("input-error");
    } else {
      localStorage.setItem("username", username.value);
    }
  }
  if (!email.value) {
    event.preventDefault();
    email.classList.add("input-error");
  } else {
    if (email.classList.contains("input-error")) {
      email.classList.remove("input-error");
    } else
      localStorage.setItem("e-mail", email.value);
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
    }
  }
});


window.onload = function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(59.939062, 30.321300)
  }
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  var image = "img/map-marker.png";
  var myLatLng = new google.maps.LatLng(59.938781, 30.323150);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);