var itemlist=document.querySelector('#items');
console.log(itemlist.parentElement);
itemlist.parentNode.style.backgroundColor="red";
itemlist.parentElement.style.backgroundColor="blue";
itemlist.children[1].style.backgroundColor="orange";
itemlist.firstElementChild.textContent="hello";
itemlist.lastElementChild.textContent="good bye";
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);
itemlist.previousElementSibling.style.backgroundColor="pink";
var newdiv=document.createElement("div");
newdiv.className="hello";

newdiv.id="hello1"
newdiv.setAttribute('titlr','hello div');
var newdivtext=document.createTextNode("hello world");
newdiv.appendChild(newdivtext);
var container=document.querySelector('header.container');
var h1=document.querySelector('header h1');
newdiv.style.fontSize="30px";
container.insertBefore(newdiv);

console.log(newdiv);