/*alert("Hello!");

function multiply(x, y) {
  return x * y;
}

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x / y;
}
function divide(x, y) {
  return x - y;
}
function power(x, y) {
  return x ** y;
}
function hello(name) {
  return "name" + name + "!";
}*/
/*function hello(name) {
  alert("hello fucking " + name + "!");
}
var potato = prompt("Who the fuck are you");

if (potato === "" || potato === null) {
  alert("write bitch ");
  window.location.reload();
} else if (potato.length < 2) {
  alert("Write more bitch");
  window.location.reload();
} else {
  hello(potato);
}*/

/*var heart = $("#heart1");
heart.on("click", function() {
  $(this).removeClass("far");
  $(this).addClass("fa clicked-heart");
});*/
var heart = $("#heart1");
heart.on("click", function() {
  if ($("#heart1").hasClass("far")) {
    $(this).removeClass("far");
    $(this).addClass("fa clicked-heart");
  } else {
    $(this).removeClass("fa clicked-heart");
    $(this).addClass("far");
  }
});
/*var heart = $("#heart1");
heart.on("click", function() {
    el=$(this);
    el.toggleClass("far fa clicked-heart" )
}*/
