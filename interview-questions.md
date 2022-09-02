# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object Oriented programming (OOP) is a programming dependnent on classes and objects. It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects. its different from functional programing in that functional programming has alternate change and store data. Functional programming can not store data in objects and can only be passed through functions. 

Researched answer: 
Functional programming and object-oriented programming are different in that functional programming has alternate change and store data. In functional programming, data cannot be stored in objects, and it can only be transformed by creating functions. In object-oriented programming, data is stored in objects. Object-oriented programming is widely used by programmers and successful also.

In Object-oriented programming, it is really hard to maintain objects while increasing the levels of inheritance. It also breaks the principle of encapsulation and not fully modular even. In functional programming, it requires always a new object to execute functions, and it takes a lot of memory for executing the applications.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: A float is simply a real number. Real numbers can be a rational or an irrational number; numbers that contain a decimal, such as 9.0 or -116.42. A float in a Ruby program is a number that contains a decimal point. Integers are whole numbers such as 1 or -1.

Researched answer: Integers and floats are two different kinds of numerical data. An integer, or int, is a whole number without a decimal point. A float is a floating-point number, meaning it is a number that has a decimal place. Floats are used when more precision is needed. 

3. Ruby has an implicit return. What does that mean?

Your answer:  Implicit return means that if a return is the last expression in a path of execution, there's no need for the return keyword. nil is the default argument of return, because of this, its boolean value is false.

Researched answer: A function is returned values without using the return keyword. The Rules of Implicit Return. You must use an implicit return in a concise body.

4. What is a block in Ruby?

Your answer: A block looks similar in appearance to a method in Ruby. Methods, has a name, with blocks, however, a name is not needed, and always passes to a method call. Blocks are anonymous pieces of code that accept input from arguments and return a value.

Researched answer: Ruby blocks are anonymous functions that can be passed into methods. Blocks are enclosed in a do-end statement or curly braces {}. do-end is usually used for blocks that span through multiple lines while {} is used for single line blocks. Blocks can have arguments which should be defined between two pipe | characters.

5. What is an instance variable in Ruby?

Your answer:  In Ruby, an instance variable is a type of variable which starts with an @ symbol.


Researched answer: An instance variable in ruby has a name starting with @ symbol, and is limited to whatever the object itself refers to. Two separate objects, even though they belong to the same class, are allowed to have different values for their instance variables.

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostgreSQL is used as the primary data store or data warehouse for many web, mobile, geospatial, and analytics applications.

2. Ruby on Rails: a server-side web application framework. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. It encourages and facilitates the use of web standards such as JSON or XML for data transfer and HTML, CSS and JavaScript for user interfacing. In addition to MVC, Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern

3. ORM: Object-Relational Mapping (ORM) is a technique that lets you query and manipulate data from a database using an object-oriented paradigm. When talking about ORM, most people are referring to a library that implements the Object-Relational Mapping technique, hence the phrase "an ORM". An ORM library is a completely ordinary library written in your language of choice that encapsulates the code needed to manipulate the data, so you don't use SQL anymore; you interact directly with an object in the same language you're using.

4. Active Record: ActiveRecord is an ORM. It's a layer of Ruby code that runs between your database and your logic code. When you need to make changes to the database, you'll write Ruby code, and then run "migrations" which makes the actual changes to the database.

5. Migrations: Migrations are a convenient way to alter your database schema over time in a consistent way. They use a Ruby DSL so that you don't have to write SQL by hand, allowing your schema and changes to be database independent. You can think of each migration as being a new 'version' of the database.
