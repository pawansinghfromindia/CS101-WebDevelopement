# 🚀 DOM Introduction

## 📍 DOM - Document Object Model

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <title>DOM learning</title>
  </head>
  <body>
    <div class="bg-black">
      <h1 class="heading">DOM learning</h1>
      <p>Document Object Model is DOM.</p>
    </div>
  </body>
</html>
```

## 📍 How this HTML Document, Object Model is made?

- Let's see it through a diagram.
- Diagram for the above HTML document. 
- ```<!DOCTYPE html>```  is just for telling that you document or page type is HTML 5.
- page start from ```<html>``` tag.
- then ```<head>```, inside that few elements.
- then ```<body>```, inside that few elements.


```
Window
|
Document
|
HTML, now how does HTML made?
|		HTML is made in two ways
|		It has 2 childs 1. Head 2. Body
|
HEAD				           BODY
|				                |
TITLE			Meta			DIV - attribute
|			|			|
text node		only attribute	|
				|
attribute					|
						|
			Heading1			Paragraph
		  	|		      	  	|
			attribute			    |
			text node			textnode
```

>  **text node is programmer fancy word, it is just text and every tag is also called as** ***node***.

- Why this is important to make this long depth Object Model Diagram?
- It's important to know. Which element has has many child and how many siblings & how to reach to them?
- Like you want to reach to paragraph - ```window > document > html > body > div```, particularly this attribute bcuz
  there can be many ```divs > p``` by which attribute and then you reach the text node of ```<p>```

- Manipulate Webpage through JavaScript

---
**Page-1**
📙📗📕📘📒

# 🚀 All DOM Selectors Nodelist


## 📍 How to add/get attribute from the title in browser Window?

```javascript
document.getElementById('title')
document.getElementById('title').id
````

## 📍 class vs className (internally browser in HTML class convert it to className)

```javascript
document.getElementById('title').class  document.getElementById('title').className

document.getElementById('title').getAttribute
document.getElementById('title').getAttribute()
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')

document.getElementById('title').setAttribute('class','test') //overwite the class
document.getElementById('title').setAttribute('class','test heading')// add class

const title = document.getElementById('title')

title.style.backgroundColor='green'
title.style.padding = "15px"
title.style.borderRadius = "15px"
```

## 📍 How to add/get content in the browser window?

```title.textContent``` <br/>
```title.innerText``` <br/>
```title.innerHTML``` <br/>

- All of the three give same content text but there is difference between them.

## 📍 textContent Vs innerText

- ```title.innerText```
'DOM learning'

- ```title.textContent``` 
DOM learning test text

- ```title.innerHTML```
DOM learning ```<span style="display: none">test text</span>```


- ```textContent``` gives all values even if it is hidden etc like display: none
- while ```innerText``` doesn't do that. It only gives you visible text.

> **Nothing is right or wrong here, It is just both have different different usecases.**

- ```innerHTML``` -> supports inner HTML tags also but if you want innerContent or innerText it doesn't support.

- These were the basics

## 📍 You can select the element by ```getElementById()``` || ```getElementByClassName()```

```javascript
document.getElementsByClassName('heading')
```

- There are some good query selectors which we used in real world.

- querySelector
```javascript
document.querySelectors()
```

## 📍 querySelector Vs querySelectorAll

```javascript
document.querySelector('h1') // you'll get 1st h1 of the page
document.querySelector('h2')
document.querySelector('#title') // select id
document.querySelector('.heading') //select class
document.querySelector('input')
document.querySelector('input[type="password"]')
```

- You can target even depth element by selecting those in DOM Manipulation.

```javascript
document.querySelector('ul')
const myul = document.querySelector('ul')
const turnGreen = myul.querySelector('li')
turnGreen.style.backgroundColor = "green"
turnGreen.style.padding = "10px"
turnGreen.innerText = "five"
```

- querySelector gives you one value only but we can have many values.

```javascript
document.querySelectorAll('li')
```
- You will get a NodeList.
- Don't considered NodeList which is a HTML array, they are not pure array.
- Easy way to know this check properties and prototype what values are given
- in Nodelist you won't see map

- but when you declare an array you will see different properties out there like map etc etc

```javascript
const myArray = [1,2,3,4,5]
myArray

templiList.style.color="red" // error 


const templiList = document.querySelectorAll('li')
templiList[0].style.color="red"
It looks like array but It's not.

const myH1 = document.querySelectorAll('h1')
myH1 // it is a nodeList
myH1.style.color = 'red' // you can't directly style it bcuz it's a nodelist
myH1[0].style.color = 'red'  // work fine


const templiList = document.querySelectorAll('li')
templiList.forEach( function(li) {
    li.style.backgroundColor = 'green'
} )

modiify the text color of the webpage list
const templiList = document.querySelectorAll('li')
templiList
templiList.forEach( function (l) {
    l.style.color = 'yellow';
} )

document.getElementsByClassName('list-item')
Here you will get HTML collection which is different from NodeList

const tempClassList = document.getElementsByClassName('list-item')
It doesn't have forEach() 
If this is the case what should do?
Similar to what if you what to use map() on NodeList you have convert it.
Here also we have to convert HTML Collection.
-> Array.from(value) // put the HTML collections

const tempClassList = document.getElementsByClassName('list-item')
const myConvertedArray = Array.from(tempClassList)
```

## 📍 Modify the JavaScript Wikipedia page

```javascript
const allH3 = document.querySelectorAll('h3');
allH3[0].innerText
const myH2 = document.querySelectorAll('.mw-headline')
myH2.forEach( (h) => {
    h.style.color = 'black';
    h.style.backgroundColor = 'green';
    h.style.padding = '10px';
    h.innerText = 'Website Hacked!!!';
} )
```

---
**Page-2**
📙📗📕📘📒


## 📍 How to create a new Element in DOM

- **Relations** <br/>
  parent-child relation <br/>
  child-child relation <br/>
  child-parent relation <br/>

- These relations help in adding or creating  all your elements in HTML documents which you received after querying into Database
  which needs to be displayed on the screen in button cards text etc. etc

```html
<script>
    const div = document.createElement("div");
    console.log(div);
    div.className = "main";
    div.id = Math.round(Math.random() * 10 + 1);
    div.setAttribute("title", "Title generated");
    div.style.backgroundColor = "green";
    div.style.padding = "12px";
  </script>
```

- This will not displayed on webpage, because this div in the memory not on the webpage for bringing on the webpage you have to tell the document to attached it.

## 📍 How to create NodeList programatically 

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Node List</title>
  </head>
  <body style="background-color: #212121; color: #fff"></body>
  <script>
    const div = document.createElement("div");
    console.log(div);
    div.className = "main";
    div.id = Math.round(Math.random() * 10 + 1);
    div.setAttribute("title", "Title generated");
    div.style.backgroundColor = "green";
    div.style.padding = "12px";

    //div.innerText = "Hello World!";
    // this is not preferred this bcuz of optimization .class innerText will first bring the value and then overwrite the values
    // where as setAttribute directly set the values they don't bring the value and then set it
    // SO it saves one round trip
    const addText = document.createTextNode("Hello World!");
    div.appendChild(addText);

    document.body.appendChild(div);
  </script>
</html>
```

---
**Page-3**
📙📗📕📘📒

## 📍 Edit and Remove elements in DOM

- To edit anything first we need to select the value?
- How do we select value?

- ```document.querySelector()```

- ```querySelector()``` came with Jquery but It is very powerful selectors. 
- Inside this a lot of CSS selectors, JQuery selectors and JavaScrip selectors everything works here.

> **NOTE : Practice Query selectors from MDN or W3Schools**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM</title>
  </head>
  <body style="background-color: #212121; color: #fff">
    <ul class="language">
      <li>JavaScript</li>
    </ul>
  </body>
  <script>
    //Target is add another li item
    // there are 2 or 3 ways to add a list item
    //1. through function
    function addLanguage(langName) {
      const li = document.createElement("li");
      li.innerHTML = `${langName}`;
      document.querySelector(".language").appendChild(li);
    }
    addLanguage("Python");
    addLanguage("TypeScript");
    // this is the first thing comes in mind to add any element
    //but there is a problem with this
    // Here Browser engine has to traverse all the tree in the document what if 1000 elements in a tree

    function addOptimizedLanguage(langName) {
      const li = document.createElement("li");
      const addText = document.createTextNode(langName);
      li.appendChild(addText);
      //li.appendChild(document.createTextNode(langName));
      document.querySelector(`.language`).appendChild(li);
    }
    addOptimizedLanguage("GoLang");
    //why optimised?
    /*
    bcuz as we're not using innerHTML so we don't have to traverse the whole tree we directly create a li in which inserted a text node and appendChild
    Although there is no impact in small basic project but in big project we should always preferred appendChild() to be appreciated
    */

    //Edit values
    const secondLang = document.querySelector("li:nth-child(2)");
    console.log(secondLang);

    //secondLang.innerHTML = "Mojo";
    const newLi = document.createElement("li");
    newLi.textContent = "Mojo Lang"; // this is in air to add this we have to replaceWith
    secondLang.replaceWith(newLi);

    //Edit2 replace 1st list JavaScript with RUST
    const firstLang = document.querySelector("li:nth-child(1)");
    console.log(firstLang);
    //firstLang.outerHTML = "<li>RUST</li>";
    const newList = document.createElement("li");
    newList.textContent = "RUST";
    firstLang.replaceWith(newList);

    //Remove , remove the last GoLang from the list
    const lastLang = document.querySelector("li:last-child");
    console.log(lastLang);
    lastLang.remove();
  </script>
</html>
```

---
**Page-4**
📙📗📕📘📒

[Prev]()  [Next]()
