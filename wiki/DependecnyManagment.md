# Dependency Injection
Dependency injection is necessary if you're not coding spaghetti 🍝 and you want to keep nice layers of separation in your React Native app's codebase. The problem is that all of the libraries out there, such as get_it or kiwi, are just service locators with no support or a limited support for automating the registration of dependencies.

Dagger solves it elegantly for native Android and Angular is also known for its powerful dependency injection framework. Now, we React Native  developers can finally use something similar

# Why use GetIt and Injectable?


GetIt is a service locator that allows you to create interfaces and their implementations, and access those implementations globally, anywhere in your app. Injectable generates code that we would have otherwise written by using annotations. This allows us to worry more about logic and less about how we are going to access it.


