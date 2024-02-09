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
            "<-- Comment -->",
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
    {
        numb: 21,
        question: "How do you convert a string to lowercase in JavaScript?",
        answer: "string.toLowerCase()",
        options: [
            "toLowerCase()",
            "string.lowerCase()",
            "convertToLowerCase()",
            "strToLower()"
        ]
    },
    {
        numb: 22,
        question: "What does the 'find()' method do in JavaScript?",
        answer: "Finds the first element in an array that satisfies a condition",
        options: [
            "Finds the index of an element in an array",
            "Finds the maximum value in an array",
            "Finds the minimum value in an array",
            "Finds the first element in an array that satisfies a condition"
        ]
    },
    {
        numb: 23,
        question: "Which method is used to join two or more arrays in JavaScript?",
        answer: "concat()",
        options: [
            "merge()",
            "concatenate()",
       "joinArrays()",
       "concat()"
        ]
      },
      {
        numb: 24,
        question: "What is the purpose of the `typeof` operator in JavaScript?",
        answer: "To determine the data type of a variable",
        options: [
            "To check if a variable is defined",
       "To determine the data type of a variable",
       "To convert a variable to a string",
       "To check if a variable is null"
        ]
      },
      {
        numb: 25,
        question: "What is the output of console.log(2 + '2')?",
        answer: "22",
        options: [
            "4",
            "22",
            "22",
            "NaN"
        ]
      },
      {
        numb: 26,
        question: "How do you declare a constant variable in JavaScript?",
        answer: "const x = 10",
        options: [
            "const x = 10;",
            "let x = 10;",
            "var x = 10;",
            "constant x = 10;"
        ]
      },
      {
        numb: 27,
        question: "What does the 'shift()' method do in JavaScript?",
        answer: "Removes the first element from an array and returns that removed element",
        options: [
            "Adds elements to the beginning of an array",
            "Removes elements from the beginning of an array",
            "Removes the first element from an array and returns that removed element",
            "Removes the last element from an array and returns that removed element"
        ]
    },
    {
        numb: 28,
        question: "What does the 'pop()' method do in JavaScript?",
        answer: "Removes the last element from an array and returns that removed element",
        options: [
            "Adds elements to the end of an array",
            "Removes elements from the beginning of an array",
            "Removes the first element from an array and returns that removed element",
            "Removes the last element from an array and returns that removed element"
        ]
    },
    {
        numb: 29,
        question: "How do you convert a string to lowercase in JavaScript?",
        answer: "string.toLowerCase()",
        options: [
            "toLowerCase()",
            "string.lowerCase()",
            "convertToLowerCase()",
            "strToLower()"
        ]
    },
    {
        numb: 30,
        question: "What does the 'find()' method do in JavaScript?",
        answer: "Finds the first element in an array that satisfies a condition",
        options: [
            "Finds the index of an element in an array",
            "Finds the maximum value in an array",
            "Finds the minimum value in an array",
            "Finds the first element in an array that satisfies a condition"
        ]
    },
    {
        numb: 31,
        question: "What is the purpose of the 'filter()' method in JavaScript?",
        answer: "Creates a new array by filtering out elements based on a condition",
        options: [
            "Modifies the original array",
            "Creates a new array by filtering out elements based on a condition",
            "Adds elements to an array",
            "Sorts the elements of an array"
        ]
    },
    {
        numb: 32,
        question: "Which method is used to convert a string to an array in JavaScript?",
        answer: "split()",
        options: [
            "toArray()",
            "split()",
            "stringToArray()",
            "join()",
            "array()"
        ]
    },
    {
        numb: 33,
        question: "What does the 'reduce()' method do in JavaScript?",
        answer: "Combines all elements in an array into a single value",
        options: [
            "Sums up all elements in an array",
            "Multiplies all elements in an array",
            "Applies a function to each element in the array",
            "Combines all elements in an array into a single value"
        ]
    },
    {
        numb: 34,
        question: "How do you convert a string to a number in JavaScript?",
        answer: "parseInt()",
        options: [
            "parseInt()",
            "convertToNumber()",
            "toNumber()",
            "numberFromString()",
            "castToNumber()"
        ]
    },
    {
        numb: 35,
        question: "What is the purpose of the 'reverse()' method in JavaScript?",
        answer: "Modifies the original array to reverse its elements",
        options: [
            "Creates a new array with reversed elements",
            "Sorts the elements of an array",
            "Modifies the original array to reverse its elements",
            "Removes elements from an array"
        ]
    },
    {
        numb: 36,
        question: "How do you access the length of an array in JavaScript?",
        answer: "array.length",
        options: [
            "array.len()",
            "array.size()",
            "array.length()",
            "array.length",
            "array.length"
        ]
    },
    {
        numb: 37,
        question: "What is the purpose of the 'Object.keys()method in JavaScript?",
        answer: "Returns an array of a given object's own enumerable property names",
        options: [
            "Adds keys to an object",
            "Removes keys from an object",
            "Returns an array of a given object's own enumerable property names",
            "Returns an array of values from an object"
        ]
    },
    {
        numb: 38,
        question: "What does the 'includes()' method do in JavaScript?",
        answer: "Checks if an array includes a certain element",
        options: [
            "Adds elements to an array",
            "Removes elements from an array",
            "Sorts the elements of an array",
            "Checks if an array includes a certain element"
        ]
    },
    {
        numb: 39,
        question: "How do you convert a number to a string in JavaScript?",
        answer: "toString()",
        options: [
            "convertToString()",
            "toString()",
            "toStr()",
            "stringify()",
            "numberToString()"
        ]
    },
    {
        numb: 40,
        question: "What does the 'slice()' method do in JavaScript?",
        answer: "Extracts a section of an array and returns a new array",
        options: [
            "Adds elements to an array",
            "Removes elements from an array",
            "Joins two or more arrays",
            "Extracts a section of an array and returns a new array"
        ]
    },
    {
        numb: 41,
        question: "What does the 'splice()' method do in JavaScript?",
        answer: "Removes elements from an array and/or adds new elements",
        options: [
            "Adds elements to an array",
            "Removes elements from an array and/or adds new elements",
            "Slices a portion of an array into a new array",
            "Sorts the elements of an array"
        ]
    },
    {
        numb: 42,
        question: "What does the 'sort()' method do in JavaScript?",
        answer: "Sorts the elements of an array",
        options: [
            "Adds elements to an array",
            "Removes elements from an array",
            "Sorts the elements of an array",
            "Reverses the order of elements in an array"
        ]
    },
    {
        numb: 43,
        question: "What is the purpose of the 'join()' method in JavaScript?",
        answer: "Joins elements of an array into a string",
        options: [
            "Splits a string into an array of substrings",
            "Joins elements of an array into a string",
            "Slices a portion of an array into a new array",
            "Sorts the elements of an array"
        ]
    },
    {
        numb: 44,
        question: "What is the purpose of the 'concat()' method in JavaScript?",
        answer: "Joins two or more arrays",
        options: [
            "Splits a string into an array of substrings",
            "Joins two or more arrays",
            "Joins elements of an array into a string",
            "Sorts the elements of an array"
        ]
    },
    {
        numb: 45,
        question: "How do you create a new object in JavaScript?",
        answer: "new Object()",
        options: [
            "{}",
            "objectInstance()",
            "newObject()",
            "objectInstance()",
            "new()"
        ]
    },
    {
        numb: 46,
        question: "What does the 'toFixed()' method do in JavaScript?",
        answer: "Rounds a number to a specified number of decimal places",
        options: [
            "Trims leading and trailing whitespace from a string",
            "Converts a number to a string",
            "Rounds a number to a specified number of decimal places",
            "Returns the length of a string"
        ]
    },
    {
        numb: 47,
        question: "What is the purpose of the 'substring()' method in JavaScript?",
        answer: "Extracts the characters from a string, between two specified indices",
        options: [
            "Splits a string into an array of substrings",
            "Joins two or more strings",
            "Extracts the characters from a string, between two specified indices",
            "Returns the character at a specified index in a string"
        ]
    },
    {
        numb: 48,
        question: "What does the 'indexOf()' method return when the element is not found in an array?",
        answer: "-1",
        options: [
            "-1",
            "0",
            "null",
            "NaN",
            "undefined"
        ]
    },
    {
        numb: 49,
        question: "How do you create a JavaScript object?",
        answer: "{}",
        options: [
            "{}",
            "new Object()",
            "object()",
            "createObject()",
            "makeObject()"
        ]
    },
    {
        numb: 50,
        question: "What is the purpose of the 'push()' method in JavaScript?",
        answer: "Adds elements to the end of an array",
        options: [
            "Adds elements to the beginning of an array",
            "Adds elements to the end of an array",
            "Removes elements from the beginning of an array",
            "Removes elements from the end of an array"
        ]
    },
      



];