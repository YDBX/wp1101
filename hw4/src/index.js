import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/header.js';
// import Main from './Components/main.js';
import List from './Components/list.js';
import Footer, { left_work } from './Components/footer.js';
import reportWebVitals from './reportWebVitals';


const All = () => {

  const [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);
  const [todo, setTodo] = useState('');

  const handleClick = (index) => {
    let complete_tmp = complete;
    complete_tmp[index] = !complete_tmp[index];
    setComplete(complete_tmp);
  };
  
  const handleInput = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      let todo_tmp = todos;
      let complete_tmp = complete;

      if (todos.includes(todo)){
        alert("The todo-list has been added.");
      }
      else if (todo === ''){
        alert('Your input is empty.');
      }
      else{
        todo_tmp.push(todo);
        complete_tmp.push(false);
        setTodos(todo_tmp);
        setComplete(complete_tmp);
        setTodo('');
        left_work();
      }
    }
  }

  const remove_todo = (index) => {
    console.log(index);
    let todos_tmp = todos;
    let complete_tmp = complete;
    todos_tmp.splice(index, 1);
    complete_tmp.splice(index, 1);
    setTodos(todos_tmp);
    setComplete(complete_tmp);
    console.log(complete_tmp)
    console.log(todos);
  };

  if (todos.length === 0){
    return (
      <div id="root" className="todo-app__root">
        <Header />
        <section className="todo-app__main">
          <input className="todo-app__input" placeholder="What needs to be done" value={todo} onKeyDown={handleInput} onChange={(e) => setTodo(e.target.value)}></input>
        </section>
      </div>
    );  
  }
  else {
    return (
      <div id="root" className="todo-app__root">
        <Header />
        <section className="todo-app__main">
          <input className="todo-app__input" placeholder="What needs to be done" value={todo} onKeyDown={handleInput} onChange={(e) => setTodo(e.target.value)}></input>
          <List todos={todos} complete={complete} handleclick={handleClick} remove_todo={remove_todo}/>
        </section>
        <Footer todos={todos} complete={complete} />
      </div>
    );
  }
};


ReactDOM.render(
  <All />,
  document.getElementsByTagName('div')[0]
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
