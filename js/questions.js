// Questions and options array
let questions = [
    {
        numb: 1,
        question: "What does JavaScript stand for?",
        answer: "JavaScript",
        options: [
            "Java Script",
            "Just Script",
            "Jumpy Script",
            "JavaScript"
        ]
    },
    {
        numb: 2,
        question: "How do you declare a variable in JavaScript?",
        answer: "var variableName;",
        options: [
            "v variableName;",
            "variableName = value;",
            "declare variableName;",
            "var variableName;"
        ]
    },
    {
        numb: 3,
        question: "What is the purpose of the 'alert()' function in JavaScript?",
        answer: "Display a message box with an OK button",
        options: [
            "Display a message box with OK and Cancel buttons",
            "Print a message to the console",
            "Prompt the user to enter input",
            "Display a message box with an OK button"
        ]
    },
    {
        numb: 4,
        question: "Explain the difference between 'let', 'const', and 'var' in variable declaration.",
        answer: "let is block-scoped, const is used for constants, and var is function-scoped",
        options: [
            "They are interchangeable and can be used in any context",
            "let is block-scoped, const is used for constants, and var is function-scoped",
            "let is used for constants, const is block-scoped, and var is function-scoped",
            "let is used for constants, const is function-scoped, and var is block-scoped"
        ]
    },
    {
        numb: 5,
        question: "How do you comment in JavaScript?",
        answer: " // Comment",
        options: [
            "  // Comment ",
            "/* Comment */",
            "<!-- Comment -->",
            "Both a and b"
        ]
    },
    {
        numb: 6,
        question: "What is the difference between == and === in JavaScript?",
        answer: "'==' compares values and types, === compares values only",
        options: [
            "They are interchangeable",
            "'==' compares values and types, === compares values only",
            "'===' compares values and types, == compares values only",
            "'==' is used for assignment, === is used for comparison"
        ]
    },
    {
        numb: 7,
        question: "What is the purpose of the 'console.log()' function?",
        answer: "Print output to the console",
        options: [
            "Display a message box",
            "Print output to the console",
            "Log errors to the console",
            "Prompt the user for input"
        ]
    },
    {
        numb: 8,
        question: "How do you create a function in JavaScript?",
        answer: "function myFunction() {}",
        options: [
            "function: myFunction() {}",
            "func myFunction() {}",
            "function myFunction() {}",
            "def myFunction() {}"
        ]
    },
    {
        numb: 9,
        question: "Explain the concept of data types in JavaScript. Give examples.",
        answer: "JavaScript has primitive and object data types (e.g., string, number, object)",
        options: [
            " JavaScript has only one data type",
            "Data types are not used in JavaScript",
            "JavaScript has primitive and object data types (e.g., string, number, object)",
            "JavaScript has only object data types"
        ]
    },
    {
        numb: 10,
        question: "How do you create an array in JavaScript?",
        answer: "array = [1, 2, 3]",
        options: [
            "array = [1, 2, 3]",
            "let array = {1, 2, 3}",
            "let array = [1, 2, 3]",
            "array(1, 2, 3)"
        ]
    },
    {
        numb: 11,
        question: "Explain the concept of closures in JavaScript.",
        answer: "They allow a function to access variables from its outer scope even after the outer function has finished executing",
        options: [
            " They refer to the closing of a webpage",
            "They allow a function to access variables from its outer scope even after the outer function has finished executing",
            "They are related to conditional statements",
            "They are used for closing browser tabs"
        ]
    },
    {
        numb: 12,
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answer: " It refers to the current object or context ",
        options: [
            "It refers to the current document",
            "It refers to the parent element",
            "It refers to the current object or context",
            "It refers to the previous element"
        ]
    },
    {
        numb: 13,
        question: "Describe the event bubbling and event capturing in the context of JavaScript events.",
        answer: "Event bubbling is the process of capturing events from parent to child, while event capturing is the opposite.",
        options: [
            "Event bubbling is the process of capturing events from child to parent, while event capturing is the opposite.",
            "Event bubbling is the process of capturing events from parent to child, while event capturing is the opposite.",
            "They are the same thing and can be used interchangeably.",
            "Event bubbling and event capturing are not related to JavaScript events."
        ]
    },
    {
        numb: 14,
        question: "How do you handle asynchronous operations in JavaScript?",
        answer: "Using callbacks, promises, or async/await",
        options: [
            "Using synchronous functions",
            "Using callbacks, promises, or async/await",
            "Using loops",
            "Using event listeners"
        ]
    },
    {
        numb: 15,
        question: "what is the difference between 'null' and 'undefined' in JavaScript.",
        answer: "null represents the intentional absence of any object value, while undefined indicates a variable has been declared but has not been assigned a value",
        options: [
            "They are interchangeable",
            "'null' represents the intentional absence of any object value, while 'undefined' indicates a variable has been declared but has not been assigned a value",
            "'undefined' represents the intentional absence of any object value, 'while null' indicates a variable has been declared but has not been assigned a value",
            "They both represent the intentional absence of any object value"
        ]
    },
    {
        numb: 16,
        question: "What is the purpose of the prototype property in JavaScript?",
        answer: " It is used to define methods for an object",
        options: [
            "It is used to create new objects",
            "It is used to define methods for an object",
            "It is used to add new properties to an object",
            "It is used to share methods and properties among objects through inheritance"
        ]
    },
    {
        numb: 17,
        question: "How does hoisting work in JavaScript?",
        answer: "Variables and functions are moved to the top of their containing scope during the compilation phase",
        options: [
            "Variables and functions are moved to the top of their containing scope during the compilation phase",
            "Variables are moved to the top of their containing scope, but functions are not",
            "Functions are moved to the top of their containing scope, but variables are not",
            "Hoisting is not applicable in JavaScript"
        ]
    },
    {
        numb: 18,
        question: "What is the use of the 'bind()' method in JavaScript?",
        answer: "It is used to bind functions to their execution context, allowing you to explicitly set what this refers to",
        options: [
            " It is used to bind elements to the DOM",
            "It is used to bind functions to their execution context, allowing you to explicitly set what this refers to",
            "It is used to bind variables to functions",
            "It is used to bind event listeners to HTML elements"
        ]
    },
    {
        numb: 19,
        question: "Explain the concept of promises and how they are used in asynchronous programming.",
        answer: " Promises represent the future result of an asynchronous operation, and they can be in a pending, fulfilled, or rejected state",
        options: [
            "Promises represent the future result of an asynchronous operation, and they can be in a pending, fulfilled, or rejected state",
            "Promises are used to represent synchronous operations in JavaScript",
            "Promises are a deprecated feature in JavaScript",
            "Promises are used only for handling errors in asynchronous code"
        ]
    },
    {
        numb: 20,
        question: "How does the 'map()' function work in JavaScript?",
        answer: " It creates a new array with the results of calling a provided function on every element in the array",
        options: [
            "It creates a new array with the results of calling a provided function on every element in the array",
            "It modifies the original array directly",
            "It deletes elements from the array",
            "It sorts the array based on a provided condition"
        ]
    },

];