# **Term 3 - Week 7 - Notes - Nathan Blaga**

**Declarative vs Imperative Programming:**

**Declarative programming:** 

- Is a programming paradigm … that expresses the logic of a computation without describing its control flow
- Require a function to be delivered without worrying about how it is handled or delivered

```js
class Button extends React.Component{
  this.state = { color: 'red' }
  handleChange = () => {
    const color = this.state.color === 'red' ? 'blue' : 'red';
    this.setState({ color });
  }
  render() {
    return (<div>
      <button 
         className=`btn ${this.state.color}`
         onClick={this.handleChange}>
      </button>
    </div>);
  }
}
```

**Imperative programming:** 

- Is a programming paradigm that uses statements that change a program’s state
- Step by step directions to get the desired result

**Example:**

```js
const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);
btn.className = ‘btn red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};
container.appendChild(btn);
```

**Component Lifecycle:**

- Component lifecycle from the time a component is mounted to when it is unmounted
- It is divided into various lifecycle methods

1. ComponentDidMount: Which runs after the first render

- Best place to make API calls

1. ComponentDidUpdate : This runs after subsequent rendering

- Does not occur on the first render
- Occurs only when prevState is different to the newState
- If there is any repetitive tasks this would be the best place (setInterval)

1. ComponentWillUnmount : Runs towards the end of the component lifecycle

- Clear any background task running for this component (clearInterval)
