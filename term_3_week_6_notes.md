# **Term 3 - Week 6 - Notes - Nathan Blaga**

**React:**
- react library -> react components
- reactDOM library -> renders content to the browser


**Get up and running quickly with react:**

```js
npx create-react-app <>
//npx downloads and executes an executable form npm
```

***Folder Structure:**
- src -> where our code goes
- node_modules -> where our libraries go
- package.json -> lists our dependencies and scripts

Setting up a .env.development and .gitgnore, setting up a port, preventing the browser from always opening when running development server.
- .env.development -> Add the following then add the file to .gitignore file
```js
PORT=8080
BROWSER=none
```

**JSX:**
```js
yarn start
// Starts the app up (Script)
```
```js
<h1>Hello World! My name is Nathan!</h1>
//JSX syntax transpiled into the following:
//React.createElement("h1, "Hello World! My name is Nathan!")
//THis is done through babel
```
```js
index.js //-> entry point
```
- Create dir in ```src``` called ```components```, to stor
- Use uppercase for all function in React.

```js
const message = "Hello World!"
{message}
style = {{color: "red"}}
style={{ color: "red", fontSize: "30px"}}
```

**Adding and removing project dependencies:**
- To add a package to use in your project, use yarn add [package]
- To remove a package from your project, use yarn remove [package]
- To install all dependencies for a project, use yarn install

**Updating project dependencies:**
- When you are using yarn to manage your project dependencies, 
- you can very simply update dependencies to the latest version, or some desired version, using ```yarn upgrade```
- To upgrade all dependencies for a project to the latest stable versions, just run:
```js
yarn upgrade
```
- To upgrade specific packages, include the package names. 
- To update to specific version or using a specific tag, include ```@version``` or ```@tag```:
```js
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```
**Updating Create React App:**
- Create React App is divided into two packages:
- ```create-react-app```: a global command-line utility used to create new projects
- ```react-scripts```: a development dependency for Create React App projects
- If updates to the packages that support Create React App are required, it will be to ```react-scripts```

**To update react-scripts, first get the latest version from the changelog. In most cases, you can simply:**
[https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md]
- update your package.json to specify the latest version of ```react-scripts``` (or the version you want) in the ```dependencies```
- remove your yarn.lock (or ```package-lock.json```)
- and run ```yarn install``` again (or ```npm install```)
- Occasionally there are breaking or incompatible changes, so you should always read through the changelog before you update.

**Custom templates:**
- In the latest versions of ```create-react-app```, you can select a template to use for your new application, and you can create your own custom templates.
**A custom template can be used to:**
- install particular dependencies
- provide the application directory structure
- add or change any default application files
- specify what is in the ```.gitignore```
- add custom scripts or eslint configurations
- change the default README.md
- and more

**You specify a custom template when you call create-react-app:**
```js
npx create-react-app my-app --template [template-name] 
```
**There are many custom templates already created that you can use. You can find templates created and published by others by searching for "cra-template-*" on npm.**
[https://www.npmjs.com/search?q=cra-template-*]
**Try creating a React project with a template you find on npm. If you have trouble finding one, try this one:**
```js
npx create-react-app basic-sass-app --template cra-template-basic-sass
```

**Creating templates:**
Learn more about creating your own custom templates in the Create React App documentation here:
[https://create-react-app.dev/docs/custom-templates/]
You can create your own templates with react-scripts 3.3.0 and higher.
If you are keen, try creating your own template following the instructions in the Create React App documentation. 
After you test it locally, you will have to have an npm account, to make it available publicly. 
[https://www.npmjs.com/signup]
Once you do, from your template directory, you can run the following to publish your template:
```js
npm login
npm publish
```
**React Fragment:**  
[https://reactjs.org/docs/fragments.html]

**styled-components:**
[https://styled-components.com/]

```js
yarn add styled-components
```
```js
import styled from 'styled-components'
//style regular html component
const Heading = styled.hs`
color: blue
`
export default Heading
```

**Class Demo:**
```js
npx create-react-app cra-demo //create project
yarn start //start server
yarn test //runs jest
yarn build // run production build
App.js //Main File -> imports components from other files
React.Fragment or <> </> //empty wrapper
const blogPosts = [
  {
  id: 1,
  title: "Where is my mind?",
  body: "Waaay out in the water. See it swimming."
  },
  {
  id: 2,
  title: "How much wood could that wood chuck really chuck?",
  body: "The woodchuck could only chuck as much wood as it had a drive to chuck. Note that the early woodchuck could only chuck on average half of what it desired to chuck."
  },
  {
  id: 3,
  title: "Bee Movie",
  body: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway"
  },
  {
  id: 4,
  title: "",
  body: ""
  },
  ]

const BlogPost = ({ title, body }) => (
    <StyledArticle>
      <h3>{title}</h3>
      <p>{body}</p>
    </StyledArticle>
 )

const App = () => (
  <>
  <h2>Blog Posts:</h2>
 {blogPosts.map(({title, body, id}) => <BlogPost key={id} title={title} body={body} /> )}
  </>
)
 yarn add styled-components // add styled-components
import styled from 'styled-components' //import the lib
const StyledArticle = styled.article`
  border: 1px solid black;
`
//Styling syntax
//change article tag to -> StyledArticle
```