1. Review and Lesson Objective
2. App creation and cleanup
    Instructions:
    1. Create a folder called lesson 2.2 and inside create a react app called lesson-app
    2. Remove the following files:
        a. logo.svg
        b. reportWebVitals.js
        c. setupTests.js
        d. App.test.js
    3. Edit index.js and App.js as necessary
3. Lesson proper
    1. in src folder, create a folder called components
    2. Create a file called Parent.js
    3. Add the Parent.js to App
    4. Create a new component called Child with content <div>This is a child component</div>
    5. Call the newly created Child component in the Parent component
    6. Add an attribute to each child component called firstName
    7. In the Child component, use the props object to get the value for the firstName
    8. Add a default value for components that don't have any passed info
    9. Create a pet component that has the following:
        1. A props called type
        2. content saying <p>I have a pet "type"<p> - figure how to call the props type
    10. Add data in the parent and child to transfer the information from parent to pet.
    11. We can pass JSX components as children by using children props
        1. Creating a Card.js and codealong with your instructor
4. Assignment