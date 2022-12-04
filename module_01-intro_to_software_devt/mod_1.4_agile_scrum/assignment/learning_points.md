# My Learning Points for Module 1.4 Assignments

## Assignment q1-smart-home
1. Implement an `if...else` statement to block direct instantiation of parent class.
2. Access the name of the class from the name of the contructor function. (`this.constructor.name`)
3. `throw new Error`
4. The `super` keyword calls the constructor of the parent class. It also passes arguments of the child class to the constructor of the parent class. When `BaseSignal` constructor runs, it sets `this.type = type;`

## Assignment q2-doc-permission
1. Create private variables using the hash symbol #
2. Call a method from the parent class `super.check()`
3. Instantiating a child class using static objects of the parent class (Permission.RolesConst.EDITOR) as arguments
