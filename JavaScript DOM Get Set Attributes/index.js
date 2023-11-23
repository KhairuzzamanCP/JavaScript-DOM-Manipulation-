var img = document.getElementById("img");
console.log(img.getAttribute("src"));

img.setAttribute("alt", "img is  showing");

console.log(img.getAttribute("alt"));

img.classList.add("testclass");
console.log(img);

var hero = document.getElementById("hero");
console.log(hero.innerText);

var parent = document.getElementById("parent").innerHTML;
console.log(parent);
