# lerna 
```Lerna``` is a popular and widely used tool written in JavaScript for setting and managing multi-package repositories for react js and react native projects with npm and Git.

Lerna has two modes: fixed and independent. Fixed mode keeps all versions of packages at the same level. This approach is quite popular these days. You may have seen it in Angular.

Independent mode allows us to have different versions per package.
If you have a large or complex project, using a single repository for all its packages can help in organization and maintenance. Thankfully, it is quite easy with Lerna.

## Building our packages with lerna create

As this is a demo project, we will assume that we will have a few modules: foundation, domain , and adapter.

To create the packages, we’ll use the lerna create command from the root of our project.

The lerna create command will guide us through the creation of a new package. It requires your new package’s name to be passed as an argument. In this case, it’s foundation, resulting in the full name being foundation.

```js
npx lerna create foundation
```

We will repeat the same process for the domain and adapter packages.

## Linking packages
With TypeScript compiled, let’s create a test integration package to see how Lerna handles linking packages.

```sh
cd packages
mkdir integration
cd integration
npm init -y
cd ../..
``` 

To install necessary dependencies from npm, or link ones from the monorepo, use the lerna add command from the root of the project. In case of any naming conflicts, local packages will always take precedence over remote ones.

```js
# Adds the module-1 package to the packages in the 'prefix-' prefixed folders
lerna add module-1 packages/prefix-*

# Install module-1 to module-2
lerna add module-1 --scope=module-2

# Install module-1 to module-2 in devDependencies
lerna add module-1 --scope=module-2 --dev

# Install module-1 to module-2 in peerDependencies
lerna add module-1 --scope=module-2 --peer

# Install module-1 in all modules except module-1
lerna add module-1

# Install babel-core in all modules
lerna add babel-core
```


The unfortunate limitation of the lerna add command is that it can only add one package at a time. Thus, if you need to install more dependencies at once, you can just add them to the package.json and then run the lerna bootstrap command

```lerna bootstrap``` installs and links all dependencies, both local and remote. When using ```lerna add```, the ```lerna bootstrap``` command is called automatically when adding any new packages.

## lerna bootstap command
```js 
npx lerna bootstrap 
```
