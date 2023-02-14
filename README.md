# mobile-react-native

# Overview 

[React Native](https://reactnative.dev/) - is Facebook's UI toolkit for building beautiful, natively compiled applications for Android and ios from a single codebase.

This is a micro-framework for React Native which is designed to help simplify developing apps. Every project provides a simple boilerplate to help you build apps easier.

This project is open source, we welcome any contributions.

# Getting Started 

- Node [install](https://nodejs.org/en/download/)
- HomeBrew [install](https://brew.sh/) (for mac os)
- ``` brew install node  ``` (for mac os)
- ``` brew install watchman  ``` (for mac os)
- Android Studio [install](https://developer.android.com/studio?gclid=CjwKCAiAheacBhB8EiwAItVO24q1KSBqPUAUZSTnyRqnyI5ksz6VHo9xELBTH2QpdRbsw8L8Z7F3vxoCGjEQAvD_BwE&gclsrc=aw.ds)
- Xcode [install](https://developer.apple.com/xcode/)

# Setup

To set up your project based on this boilerplate, you need to do some of the steps.

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

#### App Secrets

Sensitive information like api keys, credentials, etc should not be checked into git repos,
especially public ones. To keep such data safe the template uses `app_secrets.ts` file. If you
want to run the app locally, you will need to create a new file `app_secrets.ts`
under [`src/secrets`](./packages/foundation/src/secrets). To help with setting up the secrets file, the template
inclued a skeleton secrets file.

# Architecture

The architecture of the template facilitates separation of concerns and avoids tight coupling between it's various layers. The goal is to have the ability to make changes to individual layers without affecting the entire app. This architecture is an adaptation of concepts from ```Hexagonal Architecture``` & ```Clean Architecture```

 ## Hexagonal Architecture 
The idea of representing this architecture with a hexagon is due to the ease of associating the theoretical concept with the visual concept. Inside this hexagon is where our base code is located. This part is called ```domain```.

Each side of this hexagon represent an interaction with an external service, for example: http services, db, rendering..

<img src="wiki/images/hexagonal_architecture.png" alt="hexagonal_architecture" title="Hexagonal Architecture"   />

The communication between ```domain``` and the rest of actors is performed in the ```infrastructure``` layer. In this layer we implement a specific code for each of these technologies.

 ## Clean Architecture
<img src="wiki/images/clean-architecture.png" alt="clean-architecture" title="clean-architecture"/>
As with various architectures, the primary purpose of a clean architecture is to separate concerns. Divide the hierarchy according to each interest, design domain-centric rather than detailed implementation, and make sure that the internal area does not depend on external elements such as the framework or database UI.

- Distinguish between detailed implementation areas and domain areas.
- Architecture does not depend on the framework.
- The outer zone can depend on the inner zone, but the inner zone cannot depend on the outer zone.
- Both high-level and low-level modules rely on abstraction..

# Monorepo
<img src="wiki/images/monorepo-v2.png" alt="Monorepo" title="Monorepo"   />
The monorepo package consists of the above. The domain area, adapter area, and framework area are each configured as a package and designed to be more clearly distinguished. New services can be configured by adding packages from the framework area.

## What is Monorepo?
In this article, what we call "Monorepo" is a way to manage multiple npm packages in a single repository.

Here there is a typescript project and react native app with Monorepo using Lerna, a  tool I will later introduce in this article. React is also managing multiple packages in a single repository, but without Lerna.

## Following are the Pros and Cons of Monorepo.

### Pros

- You can make it easy to develop multiple packages dependent on each other
- You don't need to link each package using npm link
- You can manage npm package dependencies in a single repository
- This is especially useful when you are using a dependency management tool like Renovate

### Cons

- You need to manage issues and pull requests in a single repository
- You need to understand a workflow using Monorepo tools

<!-- 
## Communitaction Flow
<img src="wiki/images/communication-flow-v8.png" alt="communication-flow" title="communication-flow"   />
communication-flow-v8
in simple diagram, it is as above. -->

<!-- ### Board
Board posts and comments are fetched through http communication from 'Infrastructures', encapsulated as Board Root Entity including Comment Entity in 'Use Case' and delivered to 'Presenter', and 'Presenter' returns Entity data.  
in 'Components', 'Entity' data or 'View Model' encapsulated data is stored in the state management manager, and the view is redrawn according to the state change of the data. -->


# Inversion of Control
<img src="wiki/images/inversion-of-control-v2.png" alt="inversion-of-control" title="inversion-of-control"   />
In the case of 'Repository', it is an adapter layer, so you should not know about 'Repository' in 'Use Case'. Therefore, in 'Use Case', it is implemented through the Repository Interface located in the domain layer, which is then operated through Dependency Injection.

## Settings
### Package
#### Lerna
```Lerna ```is "a tool for managing JavaScript projects with multiple packages", as the official website says, which is a tool to manage multiple npm packages in a single repository.

Lerna provides the following features.

- Manage multiple npm packages in a single repository
- ```lerna bootstrap``` command installs all package's dependencies
- Hoist duplicated dependencies
   - "Hoist" means to install duplicated dependencies into the root directory rather than each package directory
- lerna publish command publishes npm packages that have changes
   - You can choose to manage all your packages as a single version, or manage each version separately
- lerna run command runs the same npm-scripts in each npm package at once
- Import existing git repositories to a Monorepo

learn more about [lerna](./wiki/lerna.md) commands

 ## Layers

 The architecture is separated into the following layers
 
 - [mobile](./packages/mobile/) - All ```UI``` and state management elements like components, screen and view models.
 - [core](./packages/) - Core business implementation
   - [domain](./packages/domain/) - Use cases for individual pieces of work.
   - [data](./packages/data/) - Repositories to manage various data sources.
   - [shared](./packages/shared/) - Common items for core module shared between domain & data.

 - [infrastructure](./packages/) - Services provide access to external elements such as databases,apis, etc.
   - [database](./packages/database/) - Database Provider
   - [network](./packages/network-retrofit/) - ts_retrofit for network setup which is internally depend on axios
 - [Dependency Injection](./packages/dependency_injection/) - Each layer has a di directory to manage Dependency Injection for that layer.

   Read the [dependency management documentation](./wiki/DependecnyManagment.md) to learn about all the scripts used in the project.

# Flavors
  The template comes with built-in support for 3 flavors. Each flavor uses a different ``` 
  main.ts ``` file.

   - Dev - [main_dev.ts](./packages/mobile/src/entrypoints/main_dev.ts)
   - QA  - [main_qa.ts](./packages/mobile/src/entrypoints/main_qa.ts)
   - Prod - [main_prod.ts](./packages/mobile/src/entrypoints/main_prod.ts)

   You can setup any environment specific values in the respective index.js files.

   To run a specific flavor you need to specify the flavor and target file.



# Entities
The layers ```core``` and ```services provider``` within infrastructure each have an ```model``` directory.

 - [mobile layer](./packages/mobile/): We consume the same models used from core/domain as domain wont change in the case of frontend apps.
 - [core layer](./packages/): Model classes for performing business logic manipulations. They act as an abstraction to hide the local and remote data models.
 - [infrastructure](./packages/): Respective service provider contains local models (data classes for the database) and remote models (data classes for the api).   


# Dependabot
[Dependabot](https://github.com/dependabot) creates pull requests to keep your dependencies secure and up-to-date.

You can opt out at any time by removing the [.github/dependabot.yml](.github/dependabot.yml) config file.

# Features
  - [Hexagonal Clean Architecture](./wiki//HexagonalArchitecture.md)
  - Monorepo
  - Adhering to SOLID Principles
  - [Lerna](./wiki/lerna.md)
  - Repository Pattern for code separations
  - [Dependabot](./wiki//dependabot.md)
  - [Dependency Injection](./wiki//DependecnyManagment.md)
  - [Network Layer](./packages/network-retrofit/) 
  - [Data Layer](./packages/data/)
  - Built-in support for 3 [flavors](./packages/foundation/src/flavors/) - ``` dev ```, ``` qa ``` and ``` prod ```.
  - Unit & Integration Tests
  - CI for build release
  - [Localisation](./packages//localisation//Localisation.md)
  - [Presentation](./packages/presentation//README.md)
  - [Routing/Navigations](./wiki/navigation.md)
  - [Obfuscation](./wiki/obfuscation.md)
  - Git hooks: with [husky](https://github.com/typicode/husky)
  - Linting: with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

# Libraries & Tools Used
  - Dependency Injection - [Obsidian](https://github.com/wix-incubator/obsidian)
  - Network - [ts_retrofit](https://github.com/nullcc/ts-retrofit)
  - Database - [watermelon](https://watermelondb.dev/)
  - Code Analysis 
  - Continuous Integration - Github Action
  - Navigation - [React Navigaiton](./wiki/navigation.md)
  - Localisation - [i18n](https://www.i18next.com/), [react-i18next](https://react.i18next.com/)
  - Obfuscation- [Javascript scrambler](https://jscrambler.com/products/code-integrity/javascript-obfuscation)
  - [Dependabot](#dependabot)
  - State Managment - [Redux](https://redux-toolkit.js.org/introduction/getting-started)

  ## Run Projects
### 1. install
#### Install
```shell
$ yarn 
```
#### lerna bootstrap
```shell
$ npx lerna bootstrap
```

### start metro 
```shell
$ npx lerna run start
```

### 3-1. Mobile(iOS)
#### Install
```shell
# $ cd /packages/mobile/ios
$ pod install
# $ cd ../../../
```
#### Start
```shell
$ npx lerna run ios
```

### 3-2. Mobile(Android)
#### Start
```shell
$ npx lerna run andorid 
```

# Modules
  ## List of Default Modules
  By default when you use this boilerplate, there are several modules that are installed automatically, here is a list of available modules:

  | Name | Description |
  | ------ | ------ |
  | [mobile](./packages/mobile/)| A module containing boilerplate app view implementation |
  | [foundation](./packages/foundation/)| A module containing flavour which include three flavour and secrerts.|
  | [core](./packages/)| A module containing core business implementation of the product which includes data,domain & shared modules|
  | [dependency-injection](./packages/dependency_injection/) | A module that contains classes to achieve DI across multiple modules based on ```injectable ```
  | [infrastructure](./packages/) | A module that includes all external data providers/adapters which are outbound adapters to ```core``` module/ports. Further includes ```database-watermelon``` & ```network-retrofit``` external ports.|
|[localisation](./packages//localisation//Localisation.md)| A module containing translation data |
|[presentation](./packages/presentation/README.md)| A module containing the state managment which is done with the help of redux|


## Upcoming Improvements

Checklist of all
upcoming [enhancements](https://github.com/NeoSOFT-Technologies/mobile-react-native/issues)
.

## Contributing to this Project

Contributions are welcome from anyone and everyone. We encourage you to review
the [Guiding principles for contributing](./wiki//contribute.md)

