// A functional component -> Components contain JSX and functionalities
// Written as a function.
// the function is then exported for use of other files
// Fragments are used to group elements together in a parent node.
// Note that JSX cannot have more than one parent node.
// The shorthand for a fragment is <> </>
// The second note for JSX is the camelcase -> JSX is converted to native JS and
// attributes written is JSX become keys in JS.
// But JS has limitations on keywords, we need to adopt the camelcase for attributes.
// eg. the class attributes should be className
// eg. any word that has a dash should be in camelcase 
// -> background-color becomes backgroundColor

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <h1>To do App</h1>
        <ul>
          <li>Task 1 - Run <input type="checkbox"/></li>
          <li>Task 2 - Read <input type="checkbox"/></li>
          <li>Task 3 - Rest <input type="checkbox"/></li>
        </ul>
      </div>
      <div>
        <h2>This is another section of code</h2>
      </div>
    </>
  );
}

export default App;