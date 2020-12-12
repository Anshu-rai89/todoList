# To Do App Using React

### Feature To Implement

##### Remove task value from Input field after Adding It in Task Array
##### Complete Delete Task Functionality 
##### Add Edit feature



## React Quiz 

#### 1 Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?
`const` name = 'Rachel';
`const` age = 31;
`const` person = { name, age };
console.log(person);

 - {{name: "Rachel", age: 31}}
 - {name: "Rachel", age: 31} 
 - {person: "Rachel", person: 31}}
 - {person: {name: "Rachel", age: 31}}
 

#### 2 To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?

- `const` topics = ['cooking', 'art', 'history'];
- `const` first = ["cooking", "art", "history"]
- `const` [] = ["cooking", "art", "history"]
- `const` [, first]["cooking", "art", "history"]
- `const` [first] = ["cooking", "art", "history"] 
- 

#### 3 What is the children prop?

- a property that adds child components to state
- a property that lets you pass components as data to other components 
- a property that lets you set an array as a property
- a property that lets you pass data to child elements



#### 4 What do you need to change about this code to get it to run?
                class clock extends React.Component {
                    render() {
                        return <h1>Look at the time: {this.props.time}</h1>;
                             }
                    }

- Add quotes around the return value
- Remove this
- Remove the render method
- Capitalize clock


#### 5  ReactJS uses _____ to increase performance
 - Original DOM
 - Virtual DOM
-  Both 1 & 2
-  None of above

#### 6 What is Virtual Dom ?

#### 7 What is Pure Components ?
#### 8 Why do we pass callback function with seState ?
#### 9 What is Strict Mode In React ? 

#### 10 What is the euivalent React Code(JSX) for bellow Code ?

    `const  element=React.createElement('h1',
    {"className":"greetings"},
    "Hello world");
    
    
#### 11 What is ReactDOM and what is the difference between ReactDOM and React?

#### 12 What is a higher order component?

#### 13 What is render() in React? And explain its purpose?

#### 14 What are controlled and uncontrolled components in React?

#### 15 What are the benefit of WebPack ?
#### 16 What are the lifecycle methods of React?

#### 17 What is reconciliation?
#### 18 What will following code do ?
    render() {
     return <button onClick={this.handleClick()}>{'Click Me'}</button>
    }
    
- Will return a Button ELement
- Will call render multiple times which lead to error
- Will Give error on Clicking on Button
- Syntex Error 

#### 19 Why is Lazy Loading ?
#### 20 What is the impact of indexes as keys?


## Redux Quiz


#### 1 What is Redux ?
#### 2 What is FLUX ?
#### 3 Can we update State Directly ?
#### 4 Do we need to keep all state in Redux Store ?
#### 5 What are reducers in redux?
#### 6 What are the core principles of Redux?
#### 7 What is Redux Thunk?
#### 9 What is React Context ?
#### 10 What is the difference between React context and React redux?
#### 11 What is Provider & Consumer ?


## Scope Closures Quiz

#### 1 . What kind of scoping does JavaScript use?
- Literal
- Lexical
- Segmental
- Sequential 

#### 2 What must be done in order to implement Lexical Scoping?
- Get the object
- Dereference the current scope chain
- Reference the current scope chain
- Return the value

#### 3 What is closure?
- Function objects
- Scope where function’s variables are resolved
- Both Function objects and Scope where function’s variables are resolved
- Function return value

#### 4 What will be the function of the following JavaScript code?

    var scope = "global scope";
    function checkscope() 
     {
        var scope = "local scope"; 
        function f() 
        { 
         return scope; 
        }
       return f;
     }
     
- Returns value null
- Returns exception
- Returns the value in scope
- Shows an error message

#### 5 What will be output of this code 

    var person = {
    name: 'Dave',
    weight: 100,
    height: 180,
    calculateBMI: function() {
        console.log(this);
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
    }
    person.calculateBMI()
#### 6 What is output ?
     var myObject = {
        foo: "bar",
        func: function() {
            var self = this;
            console.log("outer func:  this.foo = " + this.foo);
            console.log("outer func:  self.foo = " + self.foo);
            (function() {
                console.log("inner func:  this.foo = " + this.foo);
                console.log("inner func:  self.foo = " + self.foo);
            }());
        }
    };
    myObject.func();
    
#### 7 
     
     var outer='outer'
     function foo(){
       var outer='inside function'
       if(3<5){
       let b=5
       }
       console.log(outer,b)
       }
      foo()
#### 7  What is output ?
      for (var i=1; i<=5; i++) {
     setTimeout( function timer(){
         console.log( i );
     }, i*1000 );
     }
    
#### 8 what is output ?
    for (let i=1; i<=5; i++) {
       setTimeout( function timer(){
           console.log( i );
       }, i*1000 );
    }
    
#### 9 What is the output ?
    (function(){
      var a = b = 3;
    })();

    console.log(b)
    
#### 10 What is the output ?

    var hero = {
        _name: 'John Doe',
        getSecretIdentity: function (){
            return this._name;
        }
    };

    var stoleSecretIdentity = hero.getSecretIdentity;
    console.log(stoleSecretIdentity)
    console.log(hero.getSecretIdentity)
    
 #### 11 What is the output ?
     var length = 10;
    function fn() {
     console.log(this.length);
    }

    var obj = {
      length: 5,
      method: function(fn) {
        fn();
        arguments[0]();
      }
    };

    obj.method(fn, 1);
    
 #### 12 What is Output ?
     var x = 21;
    var girl = function () {
        console.log(x);
        var x = 20;
    };
    girl ();
    
 #### 13 What is Output ?
     var variable = 10;
    (()=>{
       console.log(variable);
       var variable = 20;
       console.log(variable);
    })();
 - 10 20
- undefined 20
- 20 20
    
#### 14 What is OutPut?
    var variable = 10;
    (()=>{
       console.log(variable);   // undefined
       variable = 20;
       console.log(variable);   // 20
    })();
    
- 10 20
- undefined 20
- 20 20
    
# Prototype Quiz 

#### 1 What is output of code 
                const fn = () => {};
                console.log(typeof fn);
                
#### 2 The following code won’t print the persons's name? Can you explain why? And how can we fix it? 

                function Person(name) {
                  this.name = name;
                }
                Person.prototype.getName = () => {
                  return this.name;
                };
                const tom = new Person('Tom');
                console.log(tom.getName());
                
#### 3 What is output of code ?
                class Person {}
                class Employee extends person {}
                class Developer extends Employee {}
                const tom = new Developer();
                
                
 - Object.getPrototypeOf(tom) === Developer.prototype; 
 - Object.getPrototypeOf(tom) === Employee.prototype; 
 - Developer.isPrototypeOf(tom); 
 - Developer.prototype.isPrototypeOf(tom); 
 - Employee.prototype.isPrototypeOf(tom); 
 - Person.prototype.isPrototypeOf(tom); 
 - Object.prototype.isPrototypeOf(tom); 
 
#### 4 What is the difference between the classical and the prototypical inheritance?

#### 5 After an object is created, for example using the new keyword, how can we access the prototype object that the instantiated object is linked to?

#### 6 What is output of below code ?
    const a = () => {};
    function B() {}
- typeof a; 
- typeof B;
- Object.getPrototypeOf(a);
- Object.getPrototypeOf(B);
- a.prototype; 
- B.prototype;  
 
#### 7 How does new key words works ?
    



