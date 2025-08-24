# 🚀 Tailwind CSS

## 🍃 Tailwind setup with CDN and NodeJS

- You'll hear a term quite a lot known as **DX** means Developer Experience! <br/>
  while writting CSS, you'll never experience DX or writing CSS if you don't like CSS that much.

- You're quite happy with **Bootstrap**, It was okay you will be able to get your job done!

- One day, You will met **Tailwind**, at First you don't like it, once you get familiar to it, there is no looking back! <br/>
  You will never felt the DX or joy of writing CSS that will you get writing CSS with Tailwind, you'll not find any other frameworks from
  **Ant Design, Bulma,Bootstrap, UIkit,Foundation, Sematic UI, Pure, Materialize etc**
---

## 🍂 Tailwind CSS

- The ability, the freedom and the joy of writing CSS in Tailwind is really amazing.
- At first you will feel little bit of discomfort but once you get familiar with it by creating 4-5 projects,
  you will be going to realize that Tailwind is really nice.
- A lot of tools that is being used in the facebook(Meta) Company are somewhat inspired by the Tailwind or vice-versa to write **atomic CSS**
- What does it? How does it look like? Is it a new framework?
- Do we have to learn new CSS and new styling? : You don't have to.

>  **Tailwind is exactly like CSS**

---

## 📙 How does Tailwind Works?

- Tailwind requires a lot of practice and you can convert all the projects that you build using core CSS into Tailwind CSS.

- You're not going to learn any new knowledge of styling, It is just the way of writing code. The same color, background, margin, padding, width, height,font family,
  font-size,hover, flexbox, grid,etc.
  
- Everything is going to be exactly same. Turns out, **Tailwind doesn't create new CSS**. It just put a wrapper in the existing CSS and gives you neat &
  clean written CSS file.

- You can't use Tailwind just like Bootstrap, by just adding CSS.

---

## 📕 How to use Tailwind in your HTML?

1. Go to [**Tailwind Website**](https://tailwindcss.com/)
2. Get started
3. Play CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"> </script>
```
It's not wrong. It can be done.

- What Tailwind is try to do is 

```html
<img width="1011" height="660" alt="image" src="https://github.com/user-attachments/assets/d12d63f5-4f05-4c72-85aa-0436730bf7ce"/>
```

 - Let's say you have regular css, now what tailwind css does is
 - In your regular CSS, you have class ```text-decoration: underline``` This is the styling, it can be implememted on any element ```<h1>```,```<h2>```,```<p>``` etc
 - What Tailwind does is It gives you shortcut for all of this. Imagined somebody wrote that class actually software writing that.

```css
.underline {
      text-decoration: underline
}
```
- Now you can use the class ```underline``` anywhere and everywhere you want. So, somebody literally sitting there and converting each of the classes.
- **Every single class does just 1 job only**
- Similar to underline, we have many other classes what we do in css like color text-color etc etc do search on tailwind page searchbar

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  </head>
  <body>
    <h1 class="underline text-red-800">Hello world!</h1>
    <h1 class="bg-blue-400">Lets's learn Tailwind</h1>
  </body>
</html>
```
- Now there're so much classes and how can we remeber or search each of them?
   - So, the ability to find out these classes eventually comes and you can have different variations.
   - Whatever you need you can go to Tailwind Website, Search your css style in their searchbar read the docs and find out equivalent tailwind for that.
   - It looks too much work but these classes are so **intuitively** designed that you will just be able guess them out.
 
- But, there is a problem, Tailwind is actually designed to not to write all of these and guessing game. So there are nice suggestions that are available to us with
  the VS Code like emmet.

- So, let's install the extension, There're a lot many extensions, you can go with as you wish, But Here we will install official one **by Tailwind Labs**

- Now, Technically there should be suggesions which gives all variations of every class in VS Code while writing Tailwind Code but It's not!
- This is beacuse we have chosen a path of Tailwind with the CDN and It doesn't do that magic. It's just a way to work around. This is not how officialy Tailwind
  was meant to be used?

- Majority of the big projects which are built in **React, Vue, Angular, NextJS** all uses Tailwind and It's being designed to use that way. So you need a little
  bit extra setup.

- You also tailwind Playground you can try and test play around it. There you can see all the shades will popping ups.

---

## 📘 Setup of Tailwind in proper official way, i.e. Tailwind CLI

Let's set up tailwind in proper official way that is Tailwind CLI.
You can see/refer Framework Guides as well so that you can install them.
- We're going to use Tailwind CLI
- So we need to learn How to install couple of things so that we can use these utilities.
- So first one is **Nodejs** [Nodejs](https://nodejs.org/), we're going to use Nodejs left and right in the entire course. So It's better go ahead and now
  try to download it.

---

## 🔽 Download Nodejs on your device

- Step 1. Go to [Nodejs](https://nodejs.org/)
- Step 2. Download Windows Installer(.msi) if you're on mac else download Standlalone Binary(.zip) for mac/linux
- Step 3. Open the downloaded file > Agree > next > next > next keep everything as by defualt > finish
- Step 4. Check if you have install it sucessfully or not Open Command Prompt/Terminal ```node -v``` and ```npm -v```

---

- once you have these utilities install, Now we can follow the path mentioned on Tailwind page.
- ```Ctrl + ~``` for opening your terminal in VS Code.
- Since you have npm install globally on your system.
- Step 1. Initialize your project run command ```npm init -y``` init means intialize it. This command is going to generate one file which is package JSON.
 We will study this file later on as we move onto the backend part. This is pretty common file which we have.

- Now Go back to [Tailwind Docs](https://tailwindcss.com/docs/installation/tailwind-cli)

- ```npm install tailwindcss @tailwindcss/cli``` 

- Once install tailwind, now create a folder src inside that create a file input.css add ```@import "tailwindcss";```

- ```npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch```, out.css will be created.

- ```output.css``` : What it does is It flushout all the default.

- Now you can go to your HTML file and start writing Taiwind you will get suggestions are working.

---

[Prev]()  [Next]()

**Page-1**
