window.onload=function(){var a=document.querySelector(".contact-btn"),b=document.querySelector(".modal-content"),c=document.querySelector(".modal-content-close"),d=b.querySelector("form"),e=b.querySelector("[name=username]"),f=b.querySelector("[name=e-mail]");a.addEventListener("click",function(a){if(a.preventDefault(),b.classList.add("modal-content-show"),localStorage)var c=localStorage.getItem("username");c?(e.value=c,f.focus()):e.focus()}),c.addEventListener("click",function(a){b.classList.remove("modal-content-show")}),d.addEventListener("submit",function(a){e.value?e.classList.contains("input-error")?e.classList.remove("input-error"):localStorage.setItem("username",e.value):(a.preventDefault(),e.classList.add("input-error")),f.value?f.classList.contains("input-error")?f.classList.remove("input-error"):localStorage.setItem("e-mail",f.value):(a.preventDefault(),f.classList.add("input-error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&b.classList.contains("modal-content-show")&&b.classList.remove("modal-content-show")})};var map,initialize=function(){map=new google.maps.Map(document.getElementById("map-canvas"),{zoom:17,center:new google.maps.LatLng(59.939062,30.3213)});new google.maps.Marker({position:new google.maps.LatLng(59.938781,30.32315),map:map,icon:"img/map-marker.png"})};google.maps.event.addDomListener(window,"load",initialize);