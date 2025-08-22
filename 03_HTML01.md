# 🚀 HTML Essentials

Basics of HTML <br/> 

Write fast code by using VS Code shortcuts. <br/> 
Better and proficient HTML code that works on any platform, anywhere. <br/> 

HTML is actually used on variety of interfaces, something that you know but you haven't thought that way. <br/> 

Example : <br/> 
There are a lot of screen reader on which HTML actually has to work,
even on your aeroplanes when you see those screens where you watch movies, that's also HTML. <br/> 
Railways platform advertisement, Cricket Stadiums, Corporate Offices screens etc.

There are lot of ways How HTML is being rendered and is being used not just on mobile phones.

## 🪴What is HTML?

**HTML** : Hyper Text Markup Language <br/>

### How HTML came into picture?

 **Idea behind HTML Innovation or experiment How the HTML came into picture?** was just research paper.
 
- In earlier days scientists wanted to spread around their research work and send those research paper to multiple people and that's where the web was invented. 
 At that time there was a need How can I actually on the screen or on the we can put the headings and these paragraphs and tables where we have put up our research paper so that We can share  it with people. That's where HTML was born.

- Idea behind HTML came up and we will have some **tags**, The way how tags are actually worked look something like <html> ,
almost all of the tags not every are acting as a container.

- HTML, every container starts <html> and every container ends.</html>, So **opening tag and closing tag** 

| HTML tags | Names |
|-----------|-------|
| ```<html></html>```  | HTML |
| ```<head></head>```  | head |
| ```<body></body>```  | Body |
| ```<h1></h1>``` |  Heading |
| ```<p></p>``` |  Paragraph |


- This is your basics of HTML But every single HTML doc (these documents are just as pages) that we're going to create,there pages have a precise defined structured
  so that they behave exactly same in every single browser whether it's chrome, firefox, edge etc. <br/>

- Browser really understand what you want to display, what you want to markup on the web on the screen. <br/>
For this we need to understand **the hierarchy of How HTML document is being made?**
  - ```<html>```
  - ```<head>``` is meta-data, **Data about the data is known as meta data** which basically means information about the document.
  - ```<body>```
  
```html
<HTML>
│    
└───<head>
│   │     
│   └───<title>                 
│   
└───<body>
    │     
    └───<h1>
    │   
    └───<p>
```

- The first file that we're going to create is known as **index.html** you know why? <br/>
  this is because web servers are configures to pick up some of the files automatically one of them is index.html that's default file
  but there is no such hard and fast rule that we have to call it index.html always And yes you can change those configurations as well.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <h1> Heading </h1>
   <p> paragraph </p> 
</body>
</html>
```

#### Let's understand the above code : 
  
 - **```<!DOCTYPE html>```** <br/>
 
   In earlier days there used to be lot of many doc types bcuz browsers was serving so many of the documents HTML, different versions of HTML. <br/>

   Now It's just same doctype html. <br/>
   
   Usually the 1st line of HTML is doctype html with ! which is part of syntax. <br/>

   It says **Hey, the document that you're about to serve on the webpage it supports the HTML and the latest version of HTML which is 5** <br/>

- **```<html>```** <br/>

  It's just HTML, HTML has 2 parts, one is head and another is body. <br/>

  ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>my first webpage</title>
    </head>
    <body>
        <h1>Hello from Learner</h1>
    </body>
    </html>
  ```

- **Web Browser** doesn't obey the rule like Spaces, new line in the html for that its own way of handling the line spaces, lines break.  

> Note :- You don't need to learn everything in HTML! In fact nobody knows  everything in HTML. You learn on the go, on the basis of requirement basis.

[Prev]() [Next]()
