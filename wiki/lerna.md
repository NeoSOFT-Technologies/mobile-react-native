# lerna 
```Lerna``` is a popular and widely used tool written in JavaScript for setting and managing multi-package repositories for react js and react native projects with npm and Git.

Lerna has two modes: fixed and independent. Fixed mode keeps all versions of packages at the same level. This approach is quite popular these days. You may have seen it in Angular.

Independent mode allows us to have different versions per package.
If you have a large or complex project, using a single repository for all its packages can help in organization and maintenance. Thankfully, it is quite easy with Lerna.

> /lerna.json
```js
{
  "packages": ["packages/*"],
  "npmClient": "yarn",
  "useWorkspaces": true,
  "version": "0.0.1"
}

```
#### Package
> /package.json
```js
{
  ...
  "workspaces": {
    "packages": [
      "packages/**"
    ],
    "nohoist": [
      "**/mobile",
      "**/mobile/**"
    ]
  }
  ...
}
```

## Building our packages with lerna create

As this is a demo project, we will assume that we will have a few modules: foundation, domain , and adapter.

To create the packages, we’ll use the lerna create command from the root of our project.

The lerna create command will guide us through the creation of a new package. It requires your new package’s name to be passed as an argument. In this case, it’s foundation, resulting in the full name being foundation.

```js
npx lerna create foundation
```

We will repeat the same process for the domain and adapter packages.

## Linking packages
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

## To add new package to module 
```js
# Add package to specific module 
  lerna add package_name --scope=module_name
# Add to all module 
   lerna add package_name 
``
```js
#For example if you want to localisation package 
 npx lerna add i18next --scope=localisation 
```

# References
- https://github.com/lerna/lerna
- https://blog.kintone.io/entry/2020/07/14/103322#:~:text=lerna%20create%20is%20a%20command,to%20be%20managed%20in%20Monorepo.&text=To%20install%20an%20npm%20package,like%20to%20install%20the%20package.&text=Yarn%20updates%20package.,for%20the%20package%20and%20yarn.
- https://blog.logrocket.com/setting-up-monorepo-with-lerna-typescript/
