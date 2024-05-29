//Dom manipulation
//select with id
let headings=document.getElementById("heading")
console.dir(headings)
//select with class
let paragraph=document.getElementsByClassName("phera")
console.dir(paragraph)
//select with tag name
let button=document.getElementsByTagName("button")
console.dir(button)
//select by using querryselector
let ele=document.querySelector("button")
console.dir(ele)
//select by using querryselectorAll
let element=document.querySelectorAll("p");
console.dir(element);
//properties
//tag name
let name=ele.tagName
console.dir(name)
//inner tax
let head=headings.innerText
console.dir(head)
// inner html
let para2=document.querySelector("p");
console.dir(para2);
let para3=para2.innerHTML;
console.log(para3);
//text content 
let chidden=headings.textContent
console.dir(chidden)



