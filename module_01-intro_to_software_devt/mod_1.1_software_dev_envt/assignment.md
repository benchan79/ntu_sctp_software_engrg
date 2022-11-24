## Assignment

In this assignment, you will learn to use the developer's tool to inspect the elements of [this](https://nznznh.csb.app/) webpage.

1. What is the right margin of the first element? 
```
50px
```

2. What is the top padding of the second element?
```
100px
```

3. What is the class name of the third element and the content of the css?
```
The class name is: elementThree.
```
```
The contents are:

.elementThree {
    padding: 10px;
    background-color: aquamarine;
    text-shadow: 1px 1px white;
    border: gray solid 2px;
    border-radius: 10px;
}
```

4. What is the css selector of the fourth element?
```
div:nth-child(6)
```

5. What is the code you use to keep the blue box within the purple?

```
One way is to remove the width: 100% rule. By default, the div will stretch to fit the parent container.
```
```
.child {
    border: mediumblue 8px solid;
    height: 100%;
    margin: 0;
}
```
```
Another way as the hint suggests is to use apply box-sizing like so:
```
```
.child {
    border: mediumblue 8px solid;
    width: 100%;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
}
```

> hint: you should apply box-sizing property to the `.child` class. Make the changes on the developer's tool to see immediate UI change.



### Submission 

- Submit the URL of the GitHub Repository that contains your work to NTU black board.
- Always store your assignments in the `assignments` folder or `assignment.md` file.
- Should you reference the work of your classmate(s) or online resources, give them credit by adding either the name of your classmate or URL. 