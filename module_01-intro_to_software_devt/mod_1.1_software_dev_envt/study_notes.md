# Module 1.1 Software Development Environment

## Self studies check-in

### 1. What makes a great developer?
- Good at programming. Practice.
- Understands and can explain his code.
- Curious. Tech is a rapidly evolving environment.
- Enjoys building things. Motivated.
- Can explain things well. Teach, blog, Present.
- Persistent. Tenacious.
- Tighten feedback loop. Efficient.
- Master tools. Efficient.
- Deliver products. 'Fullstack'
- Beyond the code. Care for business and product.

### 2. What are programming languages? Why do we have them?
- A programming language is a vocbulary and set of grammatical rules for instructing a computer to perform specific tasks.
- The main functions of a programming language are to store and manipulate data, control hardware, provide security, and be an understandable medium for humans. 

### 3. What is the difference between compiler, transpiler and interpreter?
- A **Compiler** translates/transforms high-level language instructions or source code into object code. A linker/assembler/binder then combines modules from the runtime library to produce machine code or executable program. 
- A **Transpiler** is a type of translator that takes the source code and produces an equivalent source code in the same or a different programming language. A transpiler or a source-to-source translator converts between programming languages that operate at approximately the same level of abstraction (Python to JavaScript), while a traditional compiler translates from a higher level programming language to a lower level programming language. 
- An **Interpreter** translates high-level instructions into an intermediate form, which it then executes. In contrast, a compiler translates high-level instructions directly into machine language. Interpreted programs typically run more slowly than compiled programs, because interpreters translate code one section at a time.

### 4. What is a software development environment?
A software development environment (SDE) is the collection of processes and tools that are used to develop the source code for a program or software product. This involves the entire environment that supports the process end to end, including development, staging and production servers.

### 5. What is Bash Shell?
Bash stands for Bourne Again Shell. It is a software and a command interpreter that takes the user's input from the command line in the terminal and executes the intructions.

It also lets you combine commands into a text file called a script. All the commands in the script are executed for you each time you run the script. Scripts deliver efficiency, repeatability, and convenience.

Because of its long service life and massive user base, Bash is mature and very stable. 

Printable pdf Bash cheat sheets
- https://oit.ua.edu/wp-content/uploads/2020/12/Linux_bash_cheat_sheet-1.pdf
- https://www.loggly.com/wp-content/uploads/2015/05/Linux-Cheat-Sheet-Sponsored-By-Loggly.pdf


### Installation of necessary software development tools
1. Bash shell for windows (WSL2 - Windows Subsytem for Linux) 
2. NVM or NVM-Windows (v0.39.2)
3. Latest Node LTS (v18.12.1)
4. Git CLI (v2.25.1)
5. VS Code (v1.73.1)


### Installation of VS Code Plugins:
1. Code Runner
2. Live Server (v5.7.9)
3. Live Share (v1.0.5776)
4. Prettier (v9.9.0)

Occasional Problem encountered when installing VS Code extensions.

**Error while fetching extensions. XHR failed.**
- Sometimes refreshing helps.
- Sometimes restarting helps.
- Sometimes opening in Windows and WSL together helps.

### Chrome Developer's Tool
- Right-click on the screen and choose "Inspect"
- Go through the `elements` and `console` tab.

### Git Setup on local after creating repo in Github
1. Create new repo
```
echo "# ntu_sctp_software_engrg" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/benchan79/ntu_sctp_software_engrg.git
git push -u origin main
```

2. Push an existing repository from the command line
```
git remote add origin https://github.com/benchan79/ntu_sctp_software_engrg.git
git branch -M main
git push -u origin main
```
