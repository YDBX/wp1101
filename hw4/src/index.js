import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/header.js';
// import Main from './Components/main.js';
import List from './Components/list.js';
import Footer, { change_footer_count } from './Components/footer.js';
import reportWebVitals from './reportWebVitals';

let remove_completed_all;

const All = () => {

  let [todos, setTodos] = useState([]);
  const [complete, setComplete] = useState([]);
  const [todo, setTodo] = useState('');

  const handleClick = (index) => {
    let complete_tmp = complete;
    complete_tmp[index] = !complete_tmp[index];
    setComplete(complete_tmp);
    console.log(complete);
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
        if (change_footer_count)
          change_footer_count(1, 1);
        setTodos(todo_tmp);
        setComplete(complete_tmp);
        setTodo('');
      }
    }
  }

  // check
  const remove_Main = (index) => {
    let todos_tmp = todos;
    let complete_tmp = complete;
    if (complete[index]) {
      change_footer_count(0, -1);
    }
    else {
      change_footer_count(-1, -1);
    }
    todos_tmp.splice(index, 1);
    complete_tmp.splice(index, 1);
    setTodos(todos_tmp);
    setComplete(complete_tmp);
  };

  remove_completed_all = () => {
    let todo_tmp = todos;
    let new_todo = [];
    let new_complete = [];
    console.log(complete);
    for (let i in complete){
        if (!complete[i]) {
            new_todo.push(todos[i]);
            new_complete.push(false);
        }
    }
    // setTodos(todos.filter((todo) => new_todo.includes(todo)));
    // setComplete(complete.filter(item => item === false));
    setTodos(new_todo);
    console.log(setTodos)
    console.log(todos);
    console.log(complete);
  }

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
          <List todos={todos} complete={complete} handleclick={handleClick} remove_main={remove_Main}/>
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

export {remove_completed_all};