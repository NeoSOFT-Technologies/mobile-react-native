# Dependency Injection
Dependency injection is necessary if you're not coding spaghetti 🍝 and you want to keep nice layers of separation in your React Native app's codebase. The problem is that all of the libraries out there.

Dependency injection is a form of inversion of control. It goes beyond constructor injection (parameter injection, setter injection, etc), but you get the idea. Dependency Injection increases the modularity of the code, and it's considered a good practice.

It's often cumbersome to keep track of object instances (like the logger above), and to instanciate them only on demand. That's why, when you want to apply the dependency injection pattern, you need to use a dependency injection container. It's a library that takes care of keeping dependencies in a registry, instanciating them on demand, and making them configurable.


## Why should you use dependency injection?
 ### Reasons to use DI : 
 - No overhead in development, testing, or production
 - Extremely easy to implement
 - Does not require a mocking/stubbing library because it’s native to JavaScript
 - Works for all your stubbing needs, such as components, classes, and regular functions

# Conclusion
Dependency Injection is being used by many popular libraries in the React ecosystem, such as React Navigation  and Redux. Additionally, React also has direct support for dependency injection.



