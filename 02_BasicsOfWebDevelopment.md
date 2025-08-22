
# 🚀 Basics of Web Development

Before we jump into the development actually writing code, It's important to understand to - <br/>
***How does the internet work? means How does one computer connects to the another computer?***

- Connecting one computer to another computer is state of the art engineering.

## 🌐 How does Internet work?

- What does mean by Internet?
    - The ability to connect one computer to another computer all round the world through a wire called **Internet**.

- But the How it does is magical and fascinating. We're able to do it all seamlessly, that's the power of engineering.
- Any computer you see like google.com, instagram.com, x.com etc all are actually not known by these names, They are all known with an **IP address**
    - The IP Address looks like 192.168.2.5
    - There is a entire stream of a engineering in knowing just about these IP addresses known as Networking. 

- Each of the computer gets IP Address which is unique in itself. But just with IP Address! you can't remember the IP Address.
- Now You have one computer which has its unique IP Address and Google.com has its own computer which also has a unique IP Address.
  Now can you connect both of them NO!, It doesn't happens like that

---

## 💥 Internet

You have an **ISP** that means people from where you have bought your internet might be **Airtel, Jio, Starlink** etc. which are **ISP - Internet Service Provider**. 

- So, we simply go ahead and first connect with IP that Hey I want to connect to a website known as google.com. He says I don't know who is the owner of the google.com 
and I don't know How to connect that. <br/>

- So, They reach out to something known as **DNS - Domain Name System**. This is long phonebook of the internet and every ISP has this phonebook and 
It keeps on updating timely basis. There are lot of chains to these DNS so that until it reaches out and resolve that. <br/>

- So, ISP reach out to DNS and say Hey, somebody is looking for google.com I don't know who that is, so can you give me the ip address of that?
and they go ahead and look for something like NsLookUp.io or something they've inbuilt solution for that. and they go ahead and 
say Hey you were looking for google.com, Just go ahead and find its DNS record. So once you go ahead and find this DNS record, that will look like ,
They say Hey, this is the IP Address of it. It goes ahead and copy paste it and then it goes ahead and tell it that, This google.com is can resolve by 
this ip address and this is being served to ISP. <br/>

- Now ISP provider goes to the big gigantic globe of something known as Internet, which is just a mesh of cables. 
and they try to look for this IP Address. once they go ahead and look for this ip address, 
they eventually find this and gives you back by saying Hey, now you're able to connect with this. <br/>

- This whole connection process is your **internet**. That's all your internet. That's how it works. <br/>

- Note : Now these names google.com, facebook.com etc etc are provided by some authorities and providers which gives you these names. <br/>

Example : GoDaddy is famous one

--- 
## 🕸️ How Application works on Web 

We need to understand what happens on the web so that we can understand the Tech very well. <br/>

Different types of Databases, what role do they play and how they work? <br/>
What's frontend? <br/>
What's backend? <br/>

### ✨ Let's understand the ***flow of How Application works?***

#### STEP 1️⃣
 You're trying to make a request on some website google.com, there is a server of google.com. 
You're trying to access this website may be trying to signup or login or access on webpage. <br/>

Step 1. Just go ahead and request to the server, You ask server Hey server, I want to visit a page might be Homepage/login/any other page. 
Now server based on your request tries to either access its database or just sends you a response back. 
If you're accessing information which are restricted like a login/signup then it will first verify its database that whether you're telling,
who you're telling is actually the person then it will response back otherwise send you Hey, you're not authorized or your password is incorrect. 
Let's assume you're trying to access the very Homepage. So the server will say the request came from this particular URL.
So I need to send back a response to this user. Once It sends back a response, there is so much of mechanism that goes on. 
We can see some of them in the Chrome Networking tab that how it goes, some of the response code. <br/>

The step 1 of the server is to send first of all the HTML to the web browser : HTML on its own doesn't look really beautiful, but it is a sematic, 
It is a structure of your webpage and that's why the name Hypertext Markup language. So It's just a markup that 
you will need some of the text, some paragraph, some heading. So these all information are being sent to you. <br/>

#### STEP 2️⃣
Step 2 . After that comes up is the CSS It makes things a little bit more beautiful. So the button should be at the top right/left corner or wherever it needs to go. 
This is the whole job of the CSS. <br/>

#### STEP 3️⃣
Step 3. Finally the functionality part of the application will comes up which is through JavaScript, JS allows you to actually have those drop downs, 
search features, ability to click the button and something happen when you click the button. 
One of the job of JS is also to take some of your data from your browser to the server. So basically JS allows you to enable the mechanism , 
the functionality of the website snd that's the basic of it. <br/>

- On a big picture that's how every single application works.

## Frontend Part : HTML | CSS | JavaScript |

🥭 Front End - Frontend Engineer 🧑‍💻 <br/>

Sometimes the frontend although it looks just HTML, CSS and JS from a very big picture in some sense it is. 
But there are some frameworks that are introduces in it. <br/>

**HTML** <br/>
HTML remains HTML <br/>

**CSS** <br/>
But for CSS there are some libraries  that comes into the pictures like Bootstrap which helps you to write CSS faster,
Tailwind which helps you to write even faster and variable of the CSS much easier. <br/>

**JavaScript** <br/>
JavaScript it's core foundation is JavaScript but some more additional tech come into the picture to handle and make things easy for you on the frontend side. <br/>
React, View and Svelte etc a lot will come and go but JS foundation remains same. <br/>

---

Server Part : A lot of people believe Server is like a big machine. No It is not. Server is just a software that serves, It serves web application, 
It might serve something else also. That is termed as **Backend**

## Backend Part : Java | Python | C++ | Go | NextJS | RUST | 

🍎 Backend - Backend Engineer 🧑‍💻 <br/>

Backend is majorly composes of two things <br/>
**1. Programming Language** <br/>
That could be JavaScript, Yes you can write full fledge backend code in JavaScript, Node JS, PHP, Django, Python, Ruby on Rails etc 
So all of these languages, they're server side scripting languages. <br/>

**2. Database** <br/>
MySQL, MongoDB, PostgreSQL etc. You can learn either or both and can store your all of the information.  <br/>
The whole job of the database is to store the information. <br/>
And there're variety and version of it, More Variety, More better it is. That's why you see so many versions of the databases. <br/>
Some are SQL, some are NoSQL means store the data in the tabular format just like tables, some just store that as JSON that's new word.

---

### 🚀 API

**API : Application Programming Interface** <br/>
API acts as a gateway, This is a medium through which the backend and frontend are interacting which each other. <br/>

Right now our frontend is JS and Backend is also JS But there could be case where our front is JS but backend is in Java or might be other language. <br/>

So How does a Backend which is written in java talks to frontend which is written in JavaScript? <br/>

Here, we need a common language so that any backend written in any language or frontend which is dealing in React or Core JavaScript cam talk to each other.
That is where API comes into the picture. <br/>

So, Your frontend is going to make a request on the API endpoint, a simple door that Hey, I'm knocking the door of Signup/Login/etc.
It sends a data into a universally accepted format that hey, the data is always going to come in this format and that format usually is known as **JSON** 
| API format that's JSON format | <br/>

Example : API is compared with Waiters in the restaurants, Users comes in and order for an Omelette, and now Omelette needs to prepared in the kitchen (Backend).
The restaurant's table for user to served where user come, sit and order (Frontend) Like you don't go into the kitchen and take out the omelette yourself. 
You ask waiter (API) Hey, can you bring me an omelette and then waiter goes and bring the omelette that waiter is consider using as an API.
and the format It serve you data in the plates that's JSON.

---

### 🐙 Website Architecture 

Basics of **website architecture**, starting with creating a simple website. <br/>
Create an **index.html** file. <br/>
Essential **HTML tags**, including DOCTYPE, html, head, meta, title, and body, and explains how to structure your HTML document. <br/>
How to use a text editor to write HTML code, view your website in a browser, and validate your HTML to ensure it’s error-free. <br/>
That's how you Create a basic **Webpage**. <br/>
Collection of Webpages make your **Website**. <br/>

[Prev](https://github.com/pawansinghfromindia/CS101-WebDevelopment/blob/main/01_IntroductionToWebDevelopment.md) [Next]()

**Page-2**
