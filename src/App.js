import React from 'react'
import ToDoList from './components/ToDoList'

function App() {
    let randomBool = Math.random() > 0.5;
    let headerOne = <h1>To do App</h1>;
    let alternative = <div>To do Form</div>;
    return (
        <div>
            {randomBool && headerOne}
            {!randomBool && alternative}
            <ToDoList />
        </div>
    )
}

export default App