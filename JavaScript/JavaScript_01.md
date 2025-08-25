# 🚀 JavaScript

## 📙 Setting up Environment in local Machine for JavaScript
Create a folder on your Desktop <br/>
Open it in VS Code Editor <br/>
Create a hello.js file <br/>

### 📗 Q: Difference between ```.txt file``` and ```.js``` file
-  Both files having extension of  ```.txt``` and ```.js``` have not particular difference both can be treated as a source file.
Both file have some text written in it.

- But in ```.js``` file have no random text we specifically written console with exact spelling and there is a special meaning to it. <br/>
If we remove l It doesn't have meaning or might be a different meaning.

- The source code which we write have special meaning, 
```javascript 
console.log("Hello JS");
``` 
- This is a structure, this is a syntax of a programming languague.

### 📕 Every programming language comes with its own extension. 
Python - hello.py <br/>
C - ```hello.c``` <br/>
C++ - ```hello.cpp``` <br/>
Java - ```hello.java``` <br/>
JavaScript - ```hello.js``` <br/>
 
- If we write same text in both ```hello.txt``` and ```hello.js``` then till here there is no difference but
  when we inject the file to software (like Compiler/Interpreter) to execute then you will see the difference.

### 📘 Q : Which software will excute our ```hello.js``` file? 

- All the software have inbuild capability to understand the structure and syntax.
When you write console, It is already defined that if the file extension is ```.js``` then accept this file and whatever is written in it.
like take input or process data or show output all these things are defined under Software which we call it as Compiler or Interpreter.

- In Javascript, this software was only available is **browser** for years.
So earlier people use to learn JavaScript by creating a Index.html file add ```<script>``` in it and then
create a ```.js``` file and then execute it in browser as software was attached in browser because for years the software is not easily available.
It was a tedious job for Developer like configuring and setting up so not known popularly.

- Earliar people used to learn through an another way Go to your Browser > Right Click and Inspect > Go to Console and there write your JavaScript

- But in recent years software is made independent of browser and now anyone can execute standalone javascript can run it like python, java, c, c++.

- It opens the door for JS, Now JavaScript is not only a browser language or frontend language now It used in Backend in mobiles and pretty much everywhere.

---
**Page-1**
📙📗📕📘📒

# 🚀 Setting up environment in local machine for Javascript 

- As like for C/C++ Java Python enviroment to execute the file, now we have environment for JavaScript.

- There are a lot of Environment,
  
## 📙 **1. NodeJs** is most popular among them.
- It's nothing special don't think it as a complex jargon or any framework or anything.
- It is as simple as for python we need python interpreter, for C we need Compiler.
- So NodeJs will simply execute our JavaScript file.

- This makes our life easy, now no need to everytime create an ```index.html``` file include ```<script>``` in it. and create a ```.js``` file and then 
go to the browser and and then run it there.

It is not only NodeJs was only in browser, there were different different types of exceution Engines like V8 Engine etc.

## 📗 **2. DenoJS**
The founder of NodeJs and DenoJs is same Ryan Dahl an American Software Developer. 

## 📕 NodeJS
Let's Download NodeJs from Google. <br/>
Download Current on your Device as it is the latest one as we're learning. <br/>
LTS is for Long Term Support which means if you want to make your project in production then download this. <br/>

Install it on your Device by <br/>
Double click and open it. <br/>
Agree > Next > Next > Next > Finish. <br/>

Now NodeJS is installed on your device! <br/>

You can check open terminal/command prompt and check whether it's install sucessfully or not by checking node version use the command >> ```node -v```

## 📘 Where to write JavaScript code?

- Don't use Notepad or any other word processor software.
- Always use a code editor like **VSCode** | **Sublime Text** | **Atom** | **JetBrains Fleet** etc. 
- The benefits of using code editor is exponential color correction, auto indentations, suggestions, plugins and many more.
- So let's pick the most popular Code Editor Tool which is **Visual Studio Code** from Microsoft.

Download it from Google <br/>
Install it on your device <br/>
Double click and open it <br/>
Agree > Next > Next > Next > Finish <br/>

- Now you have software, now as you upload any file it will say I will not pick .txt file I will pick ```.js``` file and within the software a Tree parsor 
is there which recognizes keywords like console, log etc etc so It executes all of these.

Open VSCode create ```hello.js``` <br/>
Go to the view > Terminal  | Shortcuts - ``` Ctrl + ` ``` <br/>
Now lets check nodejs iversion type ```node -v``` <br/>
Execute your ```hello.js``` file by using command >> ```node hello.js``` <br/>

---
**Page-2**
📙📗📕📘📒

## 📙 Set up Environment Online - GitHub

- Sign Up or Sign In on GitHub

- Create a new Repo

- Code > Codespace > Create Codespace on Main > will take sometime because behind the scene computer is staring (Instance creation is going on)

- As GitHub and VSCode both are owned by Microsoft So you will get VSCode online.
So in  your instance you only have VS code no other software is installed there.

## 📗 Let's make NodeJS environment here as well but It is different from your local env setup.

- Go to file > View > Command Palette > write container

- Add Dev Container Config Files which basically means in your computer instance It will add config files through which you will get NodeJS/Python etc etc by default.

- Search NodeJS > You will not see anything > Show All Definitions > Search again Node >
 We need NodeJS & JavaScript > Install default version > No additional tool as of now > OK

- Now It will add a code execution env file and ask for Rebuild 
Rebuild it > Your Computer Instance will restart with by deault NodeJS
It takes few time.

- Create a new folder 01_Basics > hello.js execute it

- To load it into repository so that all of your code and files stores permanently 

> **You have two option one is through command line another is GUI**

## 📕 Let's do it through GUI

- Go to 4th icon Source Control left side bar of VSCode <br/>
It tracks changes in your all files. <br/>
Simply add icon ++ changes. <br/>
write message description for commit. <br/>
Click on Commit. <br/>
Now click on 3... > Push <br/>
Now your file pushed into your Repo <br/>
Now you have your code file. <br/>

- If you want to change dev conatiner config file according to your need like add font or any extension you need for
that you can add configuration file or copy paste then push. Done!

- Now you should close your machine instance.

- By default GitHub close all instances which are not active but It's better to save your hours bcuz you have only limited number of hours are provided for free.
To stop this simply delete, bcuz you have already pushed your code into your repo.

---
**Page-3**
📙📗📕📘📒

[Next]()
