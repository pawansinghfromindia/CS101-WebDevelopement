# 🚀 Introduction to Version Control

Git and GitHub, giving you hands-on experience with version control and project management just like the pros.

Track and organize your code, and publish projects online, setting you up with real-world workflows from day one.

## 🍂 **Foundational concepts and tools essential for version control**

**Git**, a powerful version control system that helps you manage and track changes in your code. <br/>

You’ll get hands-on experience using Git via the command line, navigating directories, initializing repositories, 
and committing changes. <br/>

Next, you’ll explore GitHub, a web-based platform for hosting Git repositories, and learn how to link your local repositories to GitHub and push changes. <br/>

1. Utilize Git for version control, including initializing repositories, committing changes, and navigating the command line interface. <br/>

2. Link local Git repositories to GitHub and manage remote repositories, including pushing and pulling changes. <br/>

Track and manage changes in web projects using Git and GitHub, ensuring proper version control and collaboration.

---

## 📍 Introduction to GIT

Basics of using Git via the command line, including navigating directories, initializing a Git repository, and performing basic Git operations
such as adding and committing changes. <br/>

How to use Git to manage your code and collaborate with others effectively.<br/>

### KEY CONCEPTS AND COMMANDS	

- **Navigating Directories in Terminal**
  
```pwd``` : Prints the present working directory. <br/>
```ls``` : Lists the contents of the current directory.  <br/>
```cd [directory]``` : Changes to the specified directory.  <br/>
```cd ..``` : Moves up one directory level.  <br/>

- **Initializing a Git Repository**

```git init``` : Initializes a new Git repository in the current directory. <br/>

- **Checking Git Status**
  
```git status``` : Displays the status of the working directory and staging area.

- **Adding and Committing Changes**

```touch [filename]``` : Creates a new file. <br/>
```git add [filename]``` : Stages the specified file for commit. <br/>
```git commit -m "commit message"``` : Commits the staged changes with a descriptive message. <br/>

- **Viewing Commit History**

```git log``` : Displays the commit history for the repository.

---

## 📍 Introduction to GitHub

Learn about GitHub, a web service that hosts Git repositories. 

GitHub allows you to share repositories between computers and people, making it an essential tool for collaboration and version control.

How to link a local Git repository on your computer to GitHub and push changes to it.

Understand how to create a remote connection to GitHub, push changes, and manage your repositories online.

### KEY CONCEPTS AND COMMANDS

**Git Vs GitHub**

**Git: A program that runs on your computer and provides version control.**

**GitHub: A web service that hosts Git repositories and allows for sharing and collaboration.**

 
- **Creating a Repository on GitHub**
  - Visit GitHub.com  and look for Sign Up or Sign In. <br/>
  - Click the plus icon in the top-right corner and choose “New Repository.” Name the short description. Click “Create repository.” <br/>

- **Linking a Local Repository to GitHub**
  - Navigate to your local repository in the terminal. Create a remote connection to GitHub:

- **Verify the remote connection** <br/>
  ```git remote -v```

- **Pushing Changes to GitHub** <br/>
  Push changes to the remote repository on GitHub: <br/>
  ```git push origin master```

- **Creating a new repository on GitHub and linking it to a local repository**: <br/>
```mkdir myrepo``` <br/>
```cd myrepo``` <br/>
```git init``` <br/>
```git remote add origin https://github.com/username/myrepo.git``` <br/>
```git push origin master``` <br/>

### ⬇️ Download and Install Instructions:

1. Go to the Oh My Git! website: ohmygit.org .
2. Click "Download" for your operating system (Windows, macOS, or Linux).
3. Open the downloaded file and follow the prompts to install.
4. Once installed, launch Oh My Git! and start playing!

---

## 📍 Introduction to GitHub Pages

How to host your websites using GitHub Pages, a free service integrated with GitHub.

Hosting makes your HTML files publicly accessible on the internet.

GitHub Pages allows you to publish your repositories online by pushing your local changes to GitHub. 

The process involves verifying your email with GitHub, ensuring you have an index.html file in the root directory of your repository, pushing your work to GitHub, 
and enabling GitHub Pages in the repository settings. 

Once enabled, your site will be live at a URL following the pattern username.github.io/reponame. 

If your GitHub page is not loading? - wait for some time & Hard refresh <br>

How to manage caching issues with a hard refresh and how to enable or disable GitHub Pages from the repository settings.

### KEY CONCEPTS AND COMMANDS

- **Hosting with GitHub Pages** <br/>
Requirements: <br/>
1. Verify your email with GitHub.
2. Ensure an index.html file is in the root directory of the repository.
3. Push your work to the GitHub repository.
4. Enable GitHub Pages in the repository settings.
5. View your live site.

- **GitHub Pages URL Structure** <br/>
The URL follows the pattern: username.github.io/reponame.

- **Enabling GitHub Pages** <br/>
Go to the repository settings. Scroll to the GitHub Pages section. <br/>
Select the branch to publish from (usually master). Click Save.

- **Managing Caching Issues** <br/>
Perform a hard refresh to ensure the browser loads the latest version of your site. Hard refresh instructions can be found in the notes below.

- **Using Git for Version Control** <br/>
Track changes and commit updates using Git commands: <br/>
```git add .``` (add all changes) <br/>
```git commit -m "descriptive commit message" ``` (commit changes with a message) <br/>

#### 🤔 Do you know **Hard Refresh**?
If you aren't seeing the most recent version of your code, you may need to clear the cache. <br/> 
Each browser has a slightly different way of doing this. <br/>
In Chrome: <br/>
1. Go to the "Tools" menu in the upper right-hand corner of the page
2. Click on "History."
3. Click on "Clear browsing data..."
4. Select the types of data that you want to clear. Include "Cached images and files."

- A quick web search will give you instructions on how to do the same in other browsers.

---
