# mobile-react-native

# Overview 

[React Native](https://reactnative.dev/) - is Facebook's UI toolkit for building beautiful, natively compiled applications for Android and ios from a single codebase.

This is a micro-framework for React Native which is designed to help simplify developing apps. Every project provides a simple boilerplate to help you build apps easier.

This project is open source, we welcome any contributions.

# Getting Started 

- Node [install](https://nodejs.org/en/download/)
- HomeBrew [install](https://brew.sh/) (for mac os)v
- brew install node (for mac os)
- brew install watchman (for mac os)
- Android Studio [install](https://developer.android.com/studio?gclid=CjwKCAiAheacBhB8EiwAItVO24q1KSBqPUAUZSTnyRqnyI5ksz6VHo9xELBTH2QpdRbsw8L8Z7F3vxoCGjEQAvD_BwE&gclsrc=aw.ds)
- Xcode [install](https://developer.apple.com/xcode/)

# Setup

To set up your project based on this boilerplate, you need to do some of the steps you need to do.

Here are the steps for setting up a Project with this React Native boilerplate:

## Step 1:

In this step you need to download(cloning) the files from this repository to your local computer:

```sh
git clone https://github.com/NeoSOFT-Technologies/mobile-react-native.git
```

or 

```sh
git clone git@github.com:NeoSOFT-Technologies/mobile-react-native.git
```

## Step 2:

The next step is to open the folder that has been downloaded / cloned into a cli application such as bash, cmd, terminal .

After cloning the repo and follow these steps to setup the project


# Architecture

The architecture of the template facilitates separation of concerns and avoids tight coupling between it's various layers. The goal is to have the ability to make changes to individual layers without affecting the entire app. This architecture is an adaptation of concepts from [Hexagonal Architecture](#) & [Clean Architecture](#)

 ## Layers

 The architecture is separated into the following layers
 
 - [app](#) - All UI and state management elements like components, screen and view models.
 - [core](#) - Core business implementation
   - [domain](#) - Use cases for individual pieces of work.
   - [data](#) - Repositories to manage various data sources.
   - [shared](#) - Common items for core module shared between domain & data.

 - [infrastructure](#) - Services provide access to external elements such as databases,apis, etc.
   - [database](#) - Database Provider
   - [network](#) - Axios for network setup

   Each layer has a di directory to manage Dependency Injection for that layer.
   Read the [dependency management documentation](#) to learn about all the scripts used in the project.

# Flavors
  The template comes with built-in support for 3 flavors. Each flavor uses a different ``` 
  main.ts ``` file.

   - Dev - [main_dev.ts](#)
   - QA - [main_qa.ts](#)
   - Prod - [main.prod.ts](#)

# Features
  - [Hexagonal Clean Architecture](#)
  - Adhering to SOLID Principles
  - Repository Pattern for code separations
  - [Dependency Injection](#)
  - Network Layer
  - Data Layer
  - Built-in support for 3 [flavors](#) - ``` dev ```, ``` qa ``` and ``` prod ```.
  - Unit & Integration Tests
  - CI for build release
  - Crashlytics/Analytics
  - [Localisation](#)
  - Routing/Navigations
  - [Responsive Framework](#)

# Libraries & Tools Used
  - Dependency Injection 
  - Network - [axios](#)
  - Database
  - Code Analysis 
  - Crashlytics - [Firebase](#)
  - Continuous Integration - Github Action
  - Navigation
  - Localisation
  - Responsive Farmework

# Modules
  ## List of Default Modules
  By default when you use this boilerplate, there are several modules that are installed automatically, here is a list of available modules:

  | Name | Description |
  | ------ | ------ |
  | [app](#)| A module containing boilerplate app view implementation |
  | [core](#)| A module containing core business implementation of the product which includes data,domain & shared modules|
  | [dependency-injection](#) | A module that contains classes to achieve DI across multiple modules based on ```injectable ```
  | [infrastructure](#) | A module that includes all external data providers/adapters which are outbound adapters to ```core``` module/ports. Further includes ```database``` & ```network``` external ports.|
|[localisation](#)| A module containing translation data |
