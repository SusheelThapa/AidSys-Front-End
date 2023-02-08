# AidSys-Front-End

**AidSys** is our project which basically takes any institution and all of its assets to cloud.
Its digitizing the entire institution to reduce the operation cost and h
ence enabling one-and-all present in the institution to make optimum use of the available resources.

## Prerequisites

1. [Visual Studio Code](https://code.visualstudio.com)[**Recommanded**]
2. [nodejs](https://nodejs.org/en/)

3. Extension for Visual Studio Code

   1. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Code Formatter
   2. [Auto import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport): For updating import statement
   3. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   4. [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

## Setting up Backend

Before you proceed the installation, you need to setup backend for this project.

The backend code for this project is found [here](https://github.com/SusheelThapa/AidSys-Back-End).

Read README.md file for setting it up properly

## Setting up Frond End

### Cloning the repository

1. First of all, clone the repository as
   ```sh
   git clone git@github.com:SusheelThapa/AidSys-Front-End.git
   ```

### Setting up environmental variable

1. Create a file `.env` and add the following content

   ```env
   REACT_APP_DOMAIN=http://localhost:5000
   ```

### Installation node packages

1. Install the node modules

   ```sh
   npm i
   ```

### Running the project

1. Running the project

   ```sh
   npm start
   ```

   _The project will run at PORT 3000_

## Guidelines for Contributors

These set of rules are to be taken into consideration while doing this project.

I cannot explain why this is useful but when you will continue, you will know your self.

### Project Guidelines

1. **Class name** should be into **PascalCase**.
2. **Variable** and **Function name** should be in **camelCase**.
3. Before commiting any changes, make sure to format the code with **Prettier**.
4. The variable name should be chosen such that there won't be confusion on it name and for what it is created.
5. The **files** and **directories name** should be in **lowercase**, space shouldn't be used(use underscore(`_`))
6. The component name file must be in in **PascalCase**

### Git and Github Guidelines

#### Git

1. **commit** every small detail or change possible.
2. The commit can be divided into two section

   - Title
   - Description

   _If you have change alot so that only **Title** is not able to describe it
   you can write detail description part_

3. Make sure that after reading the commit, reader can get brief info about your changes.

#### Github

1. It is highly encourage not to upload your file directly using **Github** instead use **Git**
2. You can use discussion section

   - If you have any doubt
   - You want to implement something but you didnot find how to implement that

   _This will be helpful if you are working in Open Source Project
   So, why not to pratice via this project_

3. If you find any thing that is usual while running project, you can create issue and **try avoiding to say it using DM**
