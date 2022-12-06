# 2.1 Introduction to React JS

## Preparation

Fork and clone the lesson repo from GitHub.  

## Part 1 - Create React App

[Create React App Reference](https://reactjs.org/docs/create-a-new-react-app.html)

Open terminal on VS Code and enter the following command: 
```
npx create-react-app my-first-app
```

A React project will be generated in the `my-first-app` folder. Take a look at how JSX is being rendered into DOM element.

Change to the app folder:
```
cd my-first-app
```
Start the app:
```
npm start
```
Once the React app has compiled succesfully, the server will be up and you can view the app in your browser at `http://localhost:3000`. From this point onwards, the app automatically reload whenever you save any new changes to your source code. 

While the server is running, port:3000 will be reserved until you 'kill' the server by  CTRL-C. If you start another React app server with `npm start`, you will be asked to choose a different port number.

Clean up the project folder by removing the following files:
```
src/reportWebVitals.js
src/setupTests.js
src/App.test.js
src/logo.svg
```
Remove all code that refers to the above files in `index.js` and `App.js`.

Remove all JSX code in between the `<div>` elements in `App.js`.

```js
// App.js

import './App.css';
function App() {
  return (
    <div className="App">
      Insert your own JSX code here...
    </div>
  );
}

export default App;
```

Save all files and run `npm start` to make sure the template works and you're good to go!

## Part 2 - JSX Demo (To Do List)

To accomplish this part, instructor should demonstrate using the following JSX to create a functional component. Edit `App.js` to accommodate the following JSX code.

```html
  <h1>                      // Big title "Todo App"
  <ul> and <li>             // List the tasks
  <input type='checkbox'>   // At the end of each task as done indicator
```

## Part 3 - JSX Rules and Features

### Fragments 

This will be a simple demonstration of using <> and </> fragment. Fragments are used to group elements together in a parent node. Note how React would return errors if two parent nodes are used without fragments. 

### camelCase Code Style

JSX is converted into native Javascript (JS) and attributes written in JSX that will become keys in JS objects. As JS has limitation on variable names, e.g. they cannot contain dashes or reserved words. HTML attributes needs to be adapted to work around these limitations: 
- HTML `class` attribute shall be `className`, to avoid clashing with reserved JS keyword.
- Dashes shall be removed and replaced with an initial capital, e.g. `background-color` shall be `backgroundColor`.

## Part 4 - Applying CSS

There are many ways to apply CSS to your React app:
- Inline styling
- CSS stylesheets
- CSS modules

All the selectors that work with plain HTML also can apply to JSX. Feel free to try to style the various elements using the App.css file. Remember to Use camelCase when naming React styles.

### Using CSS Modules

Create a CSS module file with a `.module.css` extension, e.g. `MyComponent.module.css`. Write regular CSS in your `.module.css` file.
```css
  .heading {
    color: red;
    padding: 1.5rem;
    text-align: center;
  } 
  .bodyText {
    color: blue;  
  }

```

Import the CSS module file into your component:
```js
  // In MyComponent.js file
   
  import styles from './MyComponent.module.css'
  function MyComponent() {
    return (
      <>
        <h1 className={styles.heading}>Component Heading</h1>
        <p className={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis elit ipsum, iaculis bibendum eros mattis quis. Proin nisi orci, ultricies quis volutpat aliquam, ornare non odio. </p>
      </>
    )
  }
```

CSS code inside a module is available only to the component that imports it, therefore there is no risk global name conflicts.
