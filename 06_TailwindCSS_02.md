## 🍃 Tailwind setup with CDN and NodeJS

- You'll hear a term quite a lot known as **DX** means Developer Experience! <br/>
 while writting CSS, you'll never experience DX or writing CSS if you don't like CSS that much.

- You're quite happy with **Bootstrap**, It was okay you will be able to get your job done!

- One day, You will met **Tailwind**, at First you don't like it, once you get familiar to it, there is no looking back! You will never felt the DX or joy of writing CSS
  that will you get writing CSS with Tailwind, you'll not find any other frameworks from **Ant Design, Bulma,Bootstrap, UIkit,Foundation, Sematic UI, Pure, Materialize
  etc**

---

## 🍂 Tailwind CSS
- The ability, the freedom and the joy of writing CSS in Tailwind is really amazing.
- At first you will feel little bit of discomfort but once you get familiar with it by creating 4-5 projects, you will be going to realize that Tailwind is really nice.
- A lot of tools that is being used in the facebook(Meta) Company are somewhat inspired by the Tailwind or vice-versa to write **atomic CSS**
- What does it? How does it look like? Is it a new framework?
- Do we have to learn new CSS and new styling? : You don't have to.

> **tailwind is exactly like CSS**

---

## 🚀 How does Tailwind Works?

- Tailwind requires a lot of practice and you can convert all the projects that you build using core CSS into Tailwind CSS.

- You're not going to learn any new knowledge of styling, It is just the way of writing code. The same color, background, margin, padding, width, height,font family,
  font-size,hover, flexbox, grid,etc. Everything is going to be exactly same. Turns out, **Tailwind doesn't create new CSS**. It just put a wrapper in the existing
  CSS and gives you neat & clean written CSS file.

- You can't use Tailwind just like Bootstrap, by just adding CSS.

---

## 🚀 How to use Tailwind in your HTML?

1. Go to [**Tailwind Website**](https://tailwindcss.com/)
2. Get started
3. Play CDN

```html 
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"> </script>
```

It's not wrong. It can be done.

- What Tailwind is try to do is

```html
    <img width="1011" height="660" alt="image" src="https://github.com/user-attachments/assets/d12d63f5-4f05-4c72-85aa-0436730bf7ce" />
```

 - Let's say you have regular css, now what tailwind css does is
 - In your regular CSS, you have class ```text-decoration: underline``` This is the styling, it can be implememted on any element h1,h2,p etc
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

## 🚀 Setup of Tailwind in proper official way, i.e. Tailwind CLI

Let's set up tailwind in proper official way that is Tailwind CLI.
You can see/refer Framework Guides as well so that you can install them.
- We're going to use Tailwind CLI
- So we need to learn How to install couple of things so that we can use these utilities.
- So first one is **Nodejs** [Nodejs](https://nodejs.org/), we're going to use Nodejs left and right in the entire course. So It's better go ahead and now
  try to download it.

## 🔽 Download Nodejs on your device

- Step 1. Go to [Nodejs](https://nodejs.org/)
- Step 2. Download Windows Installer(.msi) if you're on mac else download Standlalone Binary(.zip) for mac/linux
- Step 3. Open the downloaded file > Agree > next > next > next keep everything as by defualt > finish
- Step 4. Check if you have install it sucessfully or not Open Command Prompt/Terminal ```node -v``` and ```npm -v```

---

- once you have these utilities install, Now we can follow the path mentioned on Tailwind page
- Ctrl + ~ for opening your terminal in VS Code.
- Since you have npm install globally on your system.
- Step 1. Initialize your project run command ```npm init -y``` init means intialize it. This command is going to generate one file which is package JSON.
 We will study this file later on as we move onto the backend part. This is pretty common file which we have.
- Now Go back to [Tailwind Docs](https://tailwindcss.com/docs/installation/tailwind-cli)
- ```npm install tailwindcss @tailwindcss/cli``` 
- Once install tailwind, now create a folder src inside that create a file input.css add ```@import "tailwindcss";```
- ```npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch```, out.css will be created.
- output.css : What it does is It flushout all the default

- Now you can go to your HTML file and start writing Taiwind you will get suggestions are working

> **To setup your Tailwind CSS, You just have to follow the Tailwind CSS website to install it on your machine, You will might have different setup from the last version to new version. So just follow Tailwind Page for installation**

- Turn out, The whole thing about Tailwind CSS, there is nothing magical around it. It's the software which is automatically writing new CSS.

- It looks little bit of difficult at first, but whole community is loving this way of writing, We don't have to leave our HTML. It is so much of advantage when you're writing React and Nextjs and all these libraries really make sense.

---

## 📟 Production Ready Login Screen Page

![LoginAlanWalkerGIF](https://github.com/user-attachments/assets/6889a4f8-6a4e-461c-9e65-734e8b0234f7)
 
Let's build a project in Tailwind CSS<br>
Making Project is the best way to learn in computer science!

<img width="1918" height="1022" alt="image" src="https://github.com/user-attachments/assets/81df4010-1aea-4b71-898a-b74c1104a0c0" />

- You can use all of the properties whichever you want go and try.

- Since, There is no attached separated CSS file, what you will notice as we move on to React or something is, That the card you make is your permanent card. You can make your card as component and whenever you wish, you can use it. Not only that if you like the button, you can save this button and now this button will come along with the styling. So wherever you take it and whatever the project you take it, not just file different project.This will behave exactly same if that project is using tailwind, that's why people love tailwind so much in nextjs bcuz there we live in the realm of components. Everything is a component and they travel between the files, between pages, between routes, between projects. You don't have to carry any extra CSS file, you don't have to worry about overwritting your CSS file. You can generate your css file there and all the file that you uses only that much amout of css was generated. Like if somewhere we're using shadow-3xl, It's not generate it twice, It's only generate once. So you're not kind of overburdening your css files.

---

## 🍂 Full potential of Tailwind CSS

Let's do an official tour of Tailwind CSS

- The Power of Tailwind CSS, what it does?
- Why is it different from Bootstrap?
   - Now, you'll have realized that Bootstrap actually force us to just use what has been provided by Bootstrap like same color, same width etc
   - But in Tailwind, there is no restrictions, you can be just your own. You can use different variant of the colors, you can inject your own color scheme as well
   - Everything is modifiable in Tailwind CSS, That's the beauty about the frameworks and libraries. The better the framework would be considered if it gives you more liberty, more freedom instead of just putting you inside the wall.
   - Tailwind gives you freedom, whatever you want to use, however you want to use, It's just as a CSS. If you want to overwrite a property you can also do that.

- Why Tailwind is so popular in Developer community?
- Welcome to official website of [**Tailwind**](https://tailwindcss.com/) which says Rapidly build modern websites without ever leaving your HTML.
- "Best practices",don't actually work." - Adam Wathan, creator of Tailwind
- Usually the best practice is considered as keeping your CSS file separate, but turns out It doesn't work on multiple project, too much of overwriting of the CSS as soon as new component comes up specially when you work with 10 different people.
- What Tailwind does is every component comes with their own styling, there is no overwriting, no fighting between who wins.
- The cascading rules, the selectors rules in the CSS can be nightmare especially you have to shipped anything into production, you know, the nighmare of fixing of the CSS, a lot of time, functionality is to be ready, and we're just fixing the CSS bugs for weeks that's the reality.

- Go through the docs alots of things to learn, even you can change the version of it. Bcuz the whole industry is using it.Once you get into industry you'll be using tailwind that's why knowing the full potential of tailwind is crucial. Bootstrap is not that mainstream in the industry now.

---

## 🍂 How to build Responsive Design in Tailwind || Crash Course on Responsive Design
**Mobile First Design** approach, a principle that not only Tailwind but lots of other libraries and UI frameworks follow.
It's not about just writing the code, There is a approach of writing the code what should be in our mind when we're writing the code.

- [Core Concepts like Utility-First fundamentals](https://v3.tailwindcss.com/docs/utility-first)
- [Core Concepts](https://tailwindcss.com/docs/styling-with-utility-classes)
- Hover,Focus and other states
- Responsive Design
- Dark Mode
- Reusing Styles
- Adding custom styles

- What does it mean by **Responsive Design**?
   - First of all Tailwind recoomend that there is always width-device meta tag being available, whenever we design our website, It is actually being taken care automatically by the emmet ```<meta name="viewport" content="width=device-width, initial-scale=1.0" />```
   - There are other more meta tags which are being generated automatically by emmets not only that there're more tags just google them you will find tags like descriptions, authors, etc etc you can provide in your html file so that anybody who is reading your document especially like Browsers and even google can do more stuffs like Indexing, Search Engine Optimizations.
   - But what is most important is define characters set that we are using ```charset="utf-8"```, what's viewport.
   - This meta tag ensures that your website loads up initially at 100% label, not too much zoomed in or too much zoomed out. It doesn't do any kind of odd behavior like that.
 

- Mobile First Design principle in Tailwind, read [docs](https://tailwindcss.com/docs/responsive-design#working-mobile-first) which says that Hey, the whole Tailwind framework is designed with the principle of mobile first that means we want to focus on design websites that looks good on mobile because a lot of people consume on websites on mobile and It's very difficult bcuz the urge to build everything on a big screen first and then move to mobile It turns out not the great approach. You should be design for the mobile first and fix everything that needs to be fixed on the bigger screen and that's where Tailwind comes to the picture.
- They clearly mentioned Don't use sm: to target mobile devices, because here ```sm``` doesn't means that they are targeting for the mobile screen.This means that I want to write CSS which works above this smaller screen.
- So, by default whatever the tailwind guideline you're writing that is for mobile screen and then by putting the breakpoint you actually take care of the bigger screen or above screens.
- writing ```sm: ``` means this should behave after the smaller, when you write ```md: ``` that means It should behave after the medium screen.
- Always think from mobile perspective whatever you're writing are actually going to be implemented on mobile screen. And if you want to change it on bigger screen then you can target bigger screen.

- Taiwind website is design all for developers but not all developers spent time there.

> Summary : The idea is to  understand the core principles once you understand it, Designing any responsive layout, whether that's a login screen, a pricing page, it's not really that big.

 - **How the Dark Mode works**?
    - Read docs [Dark Mode](https://tailwindcss.com/docs/dark-mode) they mentioned everything regarding the Dark Mode, It's just a class. ```dark:bg-slate-800```
      How does it actually works is you need to include few things into your HTML as well to inform HTML that we're going to use dark Mode.This make much morr sense when we will learn react.

 - **Components** : tailwind actually provides you rich set of components, yes there is pricing involve in it but whole a lot of them are absolutely free. In fact almost every single first component is actually free. Example you want to build Pricing section template.

 ### Build a page using the taiwind components which have navigation bar a click section and something CTA section
 This will give you confidence.

---

## 🍂 Build any layout with Tailwind - Masterclass
 
- This is a crash course to build any layout with just Tailwind and It doesn't involve too much of CSS, once you understand the core hacks of it, That's it.

- UI/UX approach to design Webpages:

- 1. Mobile Screen - More of Vertical Space, in the world of mobile you don't have too much of opions.
      - people prefer 1 thing at a row
      - The row itself might contains card, button etc
      - This is the most common design you will see.
      - In very rare case, you will sometimes have 2 things in a row
      - The moment you try to inject 3 in any of the mobile device is not considered as good approach bcuz this is too clumsy for anybody to actually see & visualize
       
- 2. Big Screen - More of Horizontal Space, in the world of big screen, content has either take entire row space or should be divided into 2 parts.
     - On the biggest screen, there is a different ways of analysizing the things, On the bigger screen there are variations.
     - a) Equal Half
     - b) Unqual/Non-Equal Half     

- **Equal** : In the Equal section, you'll find something like  which takes Entire row of the screen, rare but might happens
     - Most usual case in Equal section is Your Screen is going to divide into 2 equal portion of it.
     - Or your screen is divided into 3 equal parts
     - Also have screen which takes 4 equal parts
     - The common thing between all these design is ALL ARE DIVIDED INTO EQUAL PARTS no matter how many sections are.

- **Non Equal** : In non-equal/Unqual section, you'll see there is a row which is divided into 25% and 75% ration, this might flip as well 75% and 25%
     - They never share equal space and this 25% and 75% is most common one.
     - small portion big portion and small portion 
      
> **On mobile screen the content should take the entire space, at max 2 equal screen, 2 unqual case is very rare, In the mobile for user's best experience  when he can tap on the content in a good width.** So either It's entire row or at max 2 equal half.

- While building the website, see it as Row Perspective first, What goes inside the row is a different perspective altogether.
- Go and look & scroll any website, you will find this pattern only. [**Tailwind**](https://tailwindcss.com)


## 📙 Let's play with tailwind Playground 
Although We have already did setup our configuration in VS Code but here output is just right to your input file It's much easier to visualize how things are done.

- **HACKS OF DESIGNING ANY LAYOUT**

- Let's remove everthing, Have a div,  inside this inner div give it min-height, rounded corner, shadow, background color.
- Obviously each div is a block level so it's goes from left to right.
- But the problems come when you need multiple layout? So Hack or solution is use Grid
- Grid, Once you do grid It does change nothing at all, where things will change actually is How do you design the things.
- Hacks: Always think from Bigger screen first! So the breakpoints of Tailwind ```sm:``` means this property will act for all of the screens which are above smaller screen. You say, Hey Tailwind I want on the smaller and above screen I want 2 columns ```grid sm:grid-cols-2 gap-4 m-4``` what happens with, when we say smaller and above so always on the all big screen this's going to divide into 2 equal halves, no matter what you do or put inside them. The moment you go to smaller screen automatically it will automatically grid take place.
```html
<div class="m-4 grid gap-4 sm:grid-cols-2">
  <div class="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
  <div class="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
</div>
```
- If you want to overwrite that automatical default behavior for mobile screen and you want that I also want 2 cols on mobile as well then you have to overwrite by writting ```grid-cols-2```
```html
<div class="m-4 grid grid-cols-2 gap-4 sm:grid-cols-2">
  <div class="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
  <div class="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
</div>
```

> 😅 Everybody says Design mobile first, but in the reality, if you'll just work in the production nobody writes for the mobile first. Everybody worry, screen is open up when you're writting code onto Desk! So, **Explicitly write for the bigger screen first**

- The moment you're saying ```grid grid-cols-2``` make sure your inner divs are equally matching that as well.

- Similarly you can do this for 3 cols and also you can explicitly write for smaller screen in defualt but for mobile you don't have to do anything that's the best thing.

```html
<div class="m-4 grid gap-3 sm:grid-cols-4">
  <div class="min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
  <div class="min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
  <div class="min-h-[100px] rounded-lg bg-red-500 shadow"></div>
  <div class="min-h-[100px] rounded-lg bg-purple-500 shadow"></div>
</div>
```
- This is the basics of how things would have done whether you have 2-divs 4-divs doesn't matter.

- Now Let's see non-equal section
   - what should we do to have non-equal sections?, We have to take care about mobile as well and we will.
   - Now we want to have one portion 25% and other 75%

- We can distribute these columns to inner child based on how many total columns you have.(How much property parent have only that much distributed among kids)
- Designers usually like to divide the entire big screen into  12 equal columns and then they distribute the inner child of How much space should be taken by them.
  This is the very very common technique in the design world.

```html
<div class="grid-cols-1 m-4 grid gap-4 sm:grid-cols-12">
  <div class="sm:col-span-2 min-h-[100px] rounded-lg bg-orange-500 shadow"></div>
  <div class="sm:col-span-10 min-h-[100px] rounded-lg bg-teal-500 shadow"></div>
</div>
```

```html
<div class="m-4 grid gap-4 sm:grid-cols-12">
  <div class="hidden min-h-[100px] rounded-lg bg-orange-500 shadow sm:col-span-2 sm:block"></div>
  <div class="min-h-[100px] rounded-lg bg-teal-500 shadow sm:col-span-8"></div>
  <div class="hidden min-h-[100px] rounded-lg bg-purple-500 shadow sm:col-span-2 sm:block"></div>
</div>
```
- The more you build projects using Tailwind CSS, you will get to know more about it.

---

[Prev]()  [Next]()

**Page-2**
