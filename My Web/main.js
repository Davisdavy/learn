var p1 = document.getElementById("p1");

p1.innerHTML = "This is my Hobby";

var createHTag =document.createElement("h3");
createHTag.innerHTML="I just created a new H3 tag updated";
document.getElementById("mainContainer").appendChild(createHTag);

var createTextElement= document.createTextNode("this is another text node");
document.getElementById("mainContainer").appendChild(createTextElement);


console.log("What is the type of element: ",p1.nodeType);
console.log("This is the inner Html : ",p1.innerHTML);
console .log("Does it have any child node: ",p1.childNodes);

var listItem= document.getElementsByTagName("li");
var hTag = document.getElementsByTagName("h");

console.log("The h2 tags are : ",hTag.innerHTML);
console.log("We have: ", listItem.length, "list Items");
